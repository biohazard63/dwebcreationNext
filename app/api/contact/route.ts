import { NextRequest, NextResponse } from 'next/server'
import { siteConfig } from '@/lib/site'
import { projectTypes } from '@/lib/data/contact'
import { canSendToVisitors, mailProvider, sendMail } from '@/lib/mail'

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || siteConfig.email

const MAX_LENGTHS = { name: 100, email: 254, phone: 30, company: 100, message: 5000 }

// Taille maximale acceptée pour une demande (les champs font au plus ~5,5 Ko)
const MAX_BODY_BYTES = 16 * 1024

// Limitation simple du nombre d'envois par IP (mémoire de l'instance)
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX = 5
const submissions = new Map<string, number[]>()

// Plafond global d'emails de confirmation par heure : évite qu'un robot utilise
// le formulaire pour faire envoyer des emails à des inconnus depuis votre adresse
const CONFIRMATION_WINDOW_MS = 60 * 60 * 1000
const CONFIRMATION_MAX = 30
let confirmations: number[] = []

function isRateLimited(ip: string) {
  const now = Date.now()
  const recent = (submissions.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS)
  recent.push(now)
  submissions.set(ip, recent)
  // Nettoyage pour que la mémoire ne grossisse pas indéfiniment
  if (submissions.size > 5000) {
    for (const [key, times] of submissions) {
      if (times.every((t) => now - t >= RATE_LIMIT_WINDOW_MS)) submissions.delete(key)
    }
  }
  return recent.length > RATE_LIMIT_MAX
}

function canSendConfirmation() {
  const now = Date.now()
  confirmations = confirmations.filter((t) => now - t < CONFIRMATION_WINDOW_MS)
  if (confirmations.length >= CONFIRMATION_MAX) return false
  confirmations.push(now)
  return true
}

// La demande doit venir du site lui-même (et pas d'un formulaire caché sur un autre site)
function isSameOrigin(request: NextRequest) {
  const origin = request.headers.get('origin')
  if (!origin) return false
  try {
    const host = request.headers.get('x-forwarded-host') || request.headers.get('host')
    return new URL(origin).host === host
  } catch {
    return false
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function asTrimmedString(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
}

export async function POST(request: NextRequest) {
  try {
    if (!mailProvider()) {
      console.error('Envoi d’emails non configuré : renseigner SMTP_USER / SMTP_PASS ou RESEND_API_KEY')
      return NextResponse.json(
        { error: 'Le service d\'envoi est temporairement indisponible' },
        { status: 503 }
      )
    }

    if (!isSameOrigin(request)) {
      return NextResponse.json({ error: 'Requête non autorisée' }, { status: 403 })
    }

    // Seul le format JSON envoyé par le formulaire est accepté
    if (!request.headers.get('content-type')?.toLowerCase().startsWith('application/json')) {
      return NextResponse.json({ error: 'Format non pris en charge' }, { status: 415 })
    }

    if (Number(request.headers.get('content-length') || 0) > MAX_BODY_BYTES) {
      return NextResponse.json({ error: 'Requête trop volumineuse' }, { status: 413 })
    }

    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Trop de messages envoyés. Veuillez réessayer plus tard.' },
        { status: 429 }
      )
    }

    // Lecture du corps avec une limite de taille (au cas où Content-Length serait absent ou faux)
    const raw = await request.text()
    if (Buffer.byteLength(raw) > MAX_BODY_BYTES) {
      return NextResponse.json({ error: 'Requête trop volumineuse' }, { status: 413 })
    }
    let body: Record<string, unknown> | null = null
    try {
      body = JSON.parse(raw)
    } catch {
      body = null
    }
    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      return NextResponse.json({ error: 'Requête invalide' }, { status: 400 })
    }

    // Champ piège anti-spam : rempli uniquement par les robots
    if (asTrimmedString(body.website)) {
      return NextResponse.json({ success: true })
    }

    const name = asTrimmedString(body.name)
    const email = asTrimmedString(body.email)
    const phone = asTrimmedString(body.phone)
    const company = asTrimmedString(body.company)
    const message = asTrimmedString(body.message)
    const projectType = projectTypes.find((p) => p.value === asTrimmedString(body.projectType))

    // Validation basique
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Tous les champs obligatoires doivent être remplis' },
        { status: 400 }
      )
    }

    if (
      name.length > MAX_LENGTHS.name ||
      email.length > MAX_LENGTHS.email ||
      phone.length > MAX_LENGTHS.phone ||
      company.length > MAX_LENGTHS.company ||
      message.length > MAX_LENGTHS.message
    ) {
      return NextResponse.json(
        { error: 'Un ou plusieurs champs dépassent la longueur autorisée' },
        { status: 400 }
      )
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Adresse email invalide' },
        { status: 400 }
      )
    }

    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safePhone = escapeHtml(phone)
    const safeCompany = escapeHtml(company)
    const safeMessage = escapeHtml(message)
    const subjectName = name.replace(/[\r\n]+/g, ' ')

    // Envoi de l'email de notification
    try {
      await sendMail({
        to: TO_EMAIL,
        replyTo: email,
        subject: `Nouvelle demande de contact - ${subjectName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #FF3D7F;">Nouvelle demande de contact</h2>

            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0;">Informations du contact :</h3>
              <p><strong>Nom :</strong> ${safeName}</p>
              <p><strong>Email :</strong> ${safeEmail}</p>
              ${safePhone ? `<p><strong>Téléphone :</strong> ${safePhone}</p>` : ''}
              ${safeCompany ? `<p><strong>Entreprise :</strong> ${safeCompany}</p>` : ''}
              ${projectType ? `<p><strong>Projet :</strong> ${escapeHtml(projectType.label)}</p>` : ''}
            </div>

            <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px;">
              <h3 style="margin-top: 0;">Message :</h3>
              <p style="white-space: pre-wrap;">${safeMessage}</p>
            </div>

            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
              <p style="color: #64748b; font-size: 14px;">
                Envoyé depuis le formulaire du site ${siteConfig.name}. Répondez directement à cet email pour écrire au client.
              </p>
            </div>
          </div>
        `,
      })
    } catch (error) {
      console.error('Erreur d’envoi (notification) :', error)
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi du message. Vous pouvez aussi m\'appeler directement.' },
        { status: 500 }
      )
    }

    // Email de confirmation automatique (un échec n'invalide pas l'envoi principal)
    if (canSendToVisitors() && canSendConfirmation()) {
      try {
        await sendMail({
          to: email,
          subject: `Votre message a bien été reçu - ${siteConfig.name}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #FF3D7F;">Merci pour votre message !</h2>

              <p>Bonjour,</p>

              <p>J'ai bien reçu votre demande et je vous en remercie.</p>

              <p>Je l'étudie et je reviens vers vous très vite (${siteConfig.responseTime.toLowerCase()}). Si c'est urgent, vous pouvez aussi m'appeler au ${siteConfig.phone}.</p>

              <p>À très bientôt,<br>${siteConfig.owner} — ${siteConfig.name}</p>

              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
                <p style="color: #64748b; font-size: 12px;">
                  Cet email est envoyé automatiquement suite à votre demande sur le site ${siteConfig.name}.
                </p>
              </div>
            </div>
          `,
        })
      } catch (error) {
        console.error('Erreur d’envoi (confirmation) :', error)
      }
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Erreur API contact:', error)
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    )
  }
}

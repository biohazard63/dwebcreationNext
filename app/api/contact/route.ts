import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'DWebCreation <contact@dwebcreation.com>'
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'contact@dwebcreation.com'

const MAX_LENGTHS = { name: 100, email: 254, company: 100, message: 5000 }

// Limitation simple du nombre d'envois par IP (mémoire de l'instance)
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX = 5
const submissions = new Map<string, number[]>()

function isRateLimited(ip: string) {
  const now = Date.now()
  const recent = (submissions.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS)
  recent.push(now)
  submissions.set(ip, recent)
  return recent.length > RATE_LIMIT_MAX
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
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY manquante')
      return NextResponse.json(
        { error: 'Le service d\'envoi est temporairement indisponible' },
        { status: 503 }
      )
    }

    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Trop de messages envoyés. Veuillez réessayer plus tard.' },
        { status: 429 }
      )
    }

    const body = await request.json().catch(() => null)
    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'Requête invalide' }, { status: 400 })
    }

    // Champ piège anti-spam : rempli uniquement par les robots
    if (asTrimmedString(body.website)) {
      return NextResponse.json({ success: true })
    }

    const name = asTrimmedString(body.name)
    const email = asTrimmedString(body.email)
    const company = asTrimmedString(body.company)
    const message = asTrimmedString(body.message)

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

    const resend = new Resend(process.env.RESEND_API_KEY)
    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeCompany = escapeHtml(company)
    const safeMessage = escapeHtml(message)
    const subjectName = name.replace(/[\r\n]+/g, ' ')

    // Envoi de l'email de notification
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `Nouveau message de contact - ${subjectName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Nouveau message de contact</h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Informations du contact :</h3>
            <p><strong>Nom :</strong> ${safeName}</p>
            <p><strong>Email :</strong> ${safeEmail}</p>
            ${safeCompany ? `<p><strong>Entreprise :</strong> ${safeCompany}</p>` : ''}
          </div>
          
          <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px;">
            <h3 style="margin-top: 0;">Message :</h3>
            <p style="white-space: pre-wrap;">${safeMessage}</p>
          </div>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
            <p style="color: #64748b; font-size: 14px;">
              Ce message a été envoyé depuis le formulaire de contact du site DWebCreation.
            </p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Erreur Resend:', error)
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi de l\'email' },
        { status: 500 }
      )
    }

    // Email de confirmation automatique (un échec n'invalide pas l'envoi principal)
    const { error: confirmationError } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [email],
      subject: 'Confirmation de votre message - DWebCreation',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Merci pour votre message !</h2>
          
          <p>Bonjour ${safeName},</p>
          
          <p>Nous avons bien reçu votre message et nous vous remercions de nous avoir contactés.</p>
          
          <p>Notre équipe va étudier votre demande et vous répondra dans les plus brefs délais (généralement sous 24h).</p>
          
          <p>En attendant, n'hésitez pas à consulter notre <a href="https://dwebcreation.com/portfolio" style="color: #2563eb;">portfolio</a> pour découvrir nos réalisations.</p>
          
          <p>Cordialement,<br>L'équipe DWebCreation</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
            <p style="color: #64748b; font-size: 12px;">
              Cet email est envoyé automatiquement. Merci de ne pas y répondre directement.
            </p>
          </div>
        </div>
      `,
    })

    if (confirmationError) {
      console.error('Erreur Resend (confirmation):', confirmationError)
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

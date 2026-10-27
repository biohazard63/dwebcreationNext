import nodemailer, { type Transporter } from 'nodemailer'
import { Resend } from 'resend'
import { siteConfig } from '@/lib/site'

// Envoi d'emails via SMTP (ex. Gmail + mot de passe d'application) ou via Resend.
// SMTP est utilisé en priorité s'il est configuré.

export interface MailMessage {
  to: string
  subject: string
  html: string
  replyTo?: string
}

type Provider = 'smtp' | 'resend' | null

export function mailProvider(): Provider {
  if (process.env.SMTP_USER && process.env.SMTP_PASS) return 'smtp'
  if (process.env.RESEND_API_KEY) return 'resend'
  return null
}

function fromAddress(provider: Provider) {
  if (process.env.CONTACT_FROM_EMAIL) return process.env.CONTACT_FROM_EMAIL
  // Avec Gmail, l'expéditeur doit être le compte lui-même
  if (provider === 'smtp') return `${siteConfig.name} <${process.env.SMTP_USER}>`
  // Sans domaine vérifié, Resend n'autorise que son adresse de test
  return `${siteConfig.name} <onboarding@resend.dev>`
}

// Le mode test de Resend n'envoie qu'à l'adresse du compte : pas d'email de confirmation possible
export function canSendToVisitors() {
  const provider = mailProvider()
  return provider === 'smtp' || !fromAddress(provider).includes('@resend.dev')
}

let transporter: Transporter | null = null

function smtpTransporter() {
  if (!transporter) {
    const port = Number(process.env.SMTP_PORT || 465)
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port,
      secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === 'true' : port === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    })
  }
  return transporter
}

export async function sendMail(message: MailMessage) {
  const provider = mailProvider()
  if (!provider) throw new Error('Aucun service d’envoi configuré (SMTP_USER / SMTP_PASS ou RESEND_API_KEY)')
  const from = fromAddress(provider)

  if (provider === 'smtp') {
    await smtpTransporter().sendMail({ from, ...message })
    return
  }

  const resend = new Resend(process.env.RESEND_API_KEY)
  const { error } = await resend.emails.send({ from, ...message, to: [message.to] })
  if (error) throw new Error(`Resend : ${error.message}`)
}

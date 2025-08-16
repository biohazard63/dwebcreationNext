import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, message } = await request.json()

    // Validation basique
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Tous les champs obligatoires doivent être remplis' },
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

    // Envoi de l'email de notification
    const { data, error } = await resend.emails.send({
      from: 'DWebCreation <contact@dwebcreation.com>',
      to: ['contact@dwebcreation.com'],
      subject: `Nouveau message de contact - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Nouveau message de contact</h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Informations du contact :</h3>
            <p><strong>Nom :</strong> ${name}</p>
            <p><strong>Email :</strong> ${email}</p>
            ${company ? `<p><strong>Entreprise :</strong> ${company}</p>` : ''}
          </div>
          
          <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px;">
            <h3 style="margin-top: 0;">Message :</h3>
            <p style="white-space: pre-wrap;">${message}</p>
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

    // Email de confirmation automatique
    await resend.emails.send({
      from: 'DWebCreation <contact@dwebcreation.com>',
      to: [email],
      subject: 'Confirmation de votre message - DWebCreation',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Merci pour votre message !</h2>
          
          <p>Bonjour ${name},</p>
          
          <p>Nous avons bien reçu votre message et nous vous remercions de nous avoir contactés.</p>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Récapitulatif de votre message :</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
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

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Erreur API contact:', error)
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    )
  }
}

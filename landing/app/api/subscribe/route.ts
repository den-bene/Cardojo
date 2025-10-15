import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

// Initialize Resend client
const resend = new Resend(process.env.RESEND_API_KEY)

// Email validation schema
const emailSchema = z.object({
  email: z.string().email('Invalid email address'),
})

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json()
    
    // Validate email
    const { email } = emailSchema.parse(body)
    
    // Send confirmation email
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'Grazie per il supporto!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333; margin-bottom: 20px;">Iscrizione avvenuta con successo!</h2>
          <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
            Ti notificheremo appena l'app verrà pubblicata.
          </p>
          <p style="color: #666; line-height: 1.6;">
            Mentre aspetti, prepara i tuoi PDF per trasformarli in flashcards con l'AI!
          </p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          <p style="color: #999; font-size: 12px;">
            Questo messaggio è stato inviato automaticamente. Non rispondere a questa email.
          </p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend API error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    console.log('Email sent successfully:', data?.id)
    
    return NextResponse.json(
      { message: 'Email sent successfully', id: data?.id },
      { status: 200 }
    )

  } catch (error) {
    console.error('API error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

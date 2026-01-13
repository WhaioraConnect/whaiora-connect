import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { corsHeaders } from '../_shared/cors.ts'

interface EmailRequest {
  to: string
  toName?: string
  subject: string
  htmlContent: string
  textContent?: string
  senderEmail?: string
  senderName?: string
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { to, toName, subject, htmlContent, textContent, senderEmail, senderName }: EmailRequest = await req.json()
    const BREVO_API_KEY = Deno.env.get('BREVO_API_KEY')
    
    if (!BREVO_API_KEY) throw new Error('BREVO_API_KEY not configured')
    if (!to || !subject || !htmlContent) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields: to, subject, htmlContent' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const brevoResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': BREVO_API_KEY,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        sender: {
          email: senderEmail || 'noreply@whaioraconnect.nz',
          name: senderName || 'Whaiora Connect'
        },
        to: [{ email: to, name: toName || '' }],
        subject,
        htmlContent,
        textContent: textContent || ''
      })
    })

    const brevoData = await brevoResponse.json()

    if (!brevoResponse.ok) {
      console.error('Brevo API Error:', brevoData)
      return new Response(
        JSON.stringify({ error: 'Failed to send email', details: brevoData }),
        { status: brevoResponse.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    return new Response(
      JSON.stringify({ 
        success: true,
        messageId: brevoData.messageId,
        message: 'Email sent successfully'
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error('Error in send-email function:', error)
    return new Response(
      JSON.stringify({ error: error.message || 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
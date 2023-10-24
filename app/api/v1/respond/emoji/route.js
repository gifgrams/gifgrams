import { NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

export async function POST(req) {
  const body = await req.json()

  const msg = {
    to: body.card_data.recipientEmail, // Change to your recipient
    from: 'noreply@gifgrams.com', // Change to your verified sender
    subject: `${profile.full_name} sent you a greeting: ${body.card_data.title}`,
    text: `${profile.full_name} sent you a GifGram! ${body.card_data.title} Open your virtual greeting here: https://gifgrams.com/${body.id}`,
    html: `<p>${profile.full_name} sent you a GifGram! </p><strong>${body.card_data.title}</strong><p>Open your virtual greeting here: https://gifgrams.com/${body.id}</p>`,
  }
  console.log('msg', msg)

  const { response: sgResponse, error: sgError } = await sgMail.send(msg)
  console.log(sgResponse?.[0].statusCode)
  console.log(sgResponse?.[0].headers)
  console.error(sgError)

  return NextResponse.json(
    sgError ? { error: sgError } : { message: 'Success' },
    {
      status: sgError ? 500 : 200,
    }
  )
}

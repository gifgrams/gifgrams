import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import sgMail from '@sendgrid/mail'
import formatEmojiEmail from './formatEmojiEmail'

export async function POST(req) {
  const body = await req.json()


  const supabase = createRouteHandlerClient({ cookies })
  let { data: card, error } = await supabase
    .from('card')
    .select('*')
    .eq('id', body.cardId)



  const msg = {
    to: card[0].user_email, // Change to your recipient
    from: 'noreply@gifgrams.com', // Change to your verified sender
    subject: `${card[0].card_data.recipientName} reacted to your GifGram: ${body.emoji}`,
    text: `${card[0].card_data.recipientName} reacted to your GifGram: ${body.emoji}`,
    html: formatEmojiEmail(
      card[0].card_data.recipientName,
      `https://gifgrams.com/${card[0].id}`,
      body.emoji
    ),
  }

  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const { response: sgResponse, error: sgError } = await sgMail.send(msg)
  console.error(JSON.stringify(sgError))

  return NextResponse.json(
    sgError ? { error: sgError } : { message: 'Success' },
    {
      status: sgError ? 500 : 200,
    }
  )
}

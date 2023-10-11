import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import sgMail from '@sendgrid/mail'

export async function POST(req) {
  const body = await req.json()
  console.log('body', body)

  const supabase = createRouteHandlerClient({ cookies })
  const {
    data: { user },
  } = await supabase.auth.getUser()
  console.log('user', user)
  const { data: profileData, error: profileError } = await supabase
    .from('profile')
    .select()
    .eq('id', user.id)
  const profile = profileData[0]

  const { error: cards_sentUpdateErr } = await supabase
    .from('profile')
    .update({ cards_sent: profile.cards_sent + 1 })
    .eq('id', profile.id)

  console.log('profileData', profileData)
  console.log('profileError', profileError)
  const { error } = await supabase.from('card').insert(body)
  // console.log('error', error)

  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  console.log('process.env.SENDGRID_API_KEY', process.env.SENDGRID_API_KEY)

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
  return NextResponse.json({ msg: 'hm' }, { status: sgError ? 500 : 200 })
}

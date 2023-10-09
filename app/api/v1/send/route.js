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

  sgMail
    .send(msg)
    .then((response) => {
      console.log(response[0].statusCode)
      console.log(response[0].headers)
    })
    .catch((error) => {
      console.error(error)
    })

  return NextResponse.json({ error })
}

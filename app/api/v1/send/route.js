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
  console.log('profileData', profileData)
  console.log('profileError', profileError)
  const { error } = await supabase.from('card').insert(body)
  // console.log('error', error)

  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const msg = {
    to: 'bztravis@umich.edu', // Change to your recipient
    from: 'noreply@gifgrams.com', // Change to your verified sender
    subject: `Greeting from ${profileData.full_name}`,
    text: '${profileData.full_name} sent you a GifGram! Open it here: https://gifgrams.com/${body.id}',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }

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

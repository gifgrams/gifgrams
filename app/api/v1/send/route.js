import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'

export async function POST(req) {
  const body = await req.json()
  // console.log('body', body)

  const supabase = createRouteHandlerClient({ cookies })
  const { error } = await supabase.from('card').insert(body)
  // console.log('error', error)

  const sgMail = require('@sendgrid/mail')
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const msg = {
    to: 'bztravis@umich.edu', // Change to your recipient
    from: 'noreply@gifgrams.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
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

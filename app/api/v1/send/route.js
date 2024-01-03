import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import sgMail from '@sendgrid/mail';
import formatReceiverEmail from './formatReceiverEmail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  const body = await req.json();

  const supabase = createRouteHandlerClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data: profileData, error: profileError } = await supabase
    .from('profile')
    .select()
    .eq('id', user.id);
  const profile = profileData[0];

  const { error: cards_sentUpdateErr } = await supabase
    .from('profile')
    .update({ cards_sent: profile.cards_sent + 1 })
    .eq('id', profile.id);

  const cardsToInsert = body.card_data.recipients.map((recipient) => ({
    ...body,
    id: crypto.randomUUID(),
    card_data: { ...body.card_data, recipients: [recipient] },
  }));
  console.log('cardsToInsert', cardsToInsert);
  const { supabaseError } = await supabase.from('card').insert(cardsToInsert);

  let errorSending = supabaseError;

  const sgPromises = body.card_data.recipients.map(({ email }) => {
    const msg = {
      to: email,
      from: 'noreply@gifgrams.com',
      subject: `${profile.full_name} sent you a greeting: ${body.card_data.title}`,
      text: `${profile.full_name} sent you a GifGram! ${body.card_data.title} Open your virtual greeting here: https://gifgrams.com/${body.id}`,
      html: formatReceiverEmail(
        profile.full_name,
        body.card_data.title,
        `https://gifgrams.com/${body.id}`
      ),
    };
    return sgMail.send(msg);
  });

  try {
    const responses = await Promise.all(sgPromises);
  } catch (err) {
    errorSending = true;
  }

  if (errorSending)
    return NextResponse.json({ message: 'Sendgrid Error' }, { status: 400 });

  return NextResponse.json({ message: '' }, { status: 200 });
}

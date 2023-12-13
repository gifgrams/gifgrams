import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import sgMail from "@sendgrid/mail";
import formatReceiverEmail from "./formatReceiverEmail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  const body = await req.json();

  const supabase = createRouteHandlerClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data: profileData, error: profileError } = await supabase
    .from("profile")
    .select()
    .eq("id", user.id);
  const profile = profileData[0];

  const { error: cards_sentUpdateErr } = await supabase
    .from("profile")
    .update({ cards_sent: profile.cards_sent + 1 })
    .eq("id", profile.id);

  const { error } = await supabase.from("card").insert(body);

  const msg = {
    to: body.card_data.recipientEmail, // Change to your recipient
    from: "noreply@gifgrams.com", // Change to your verified sender
    subject: `${profile.full_name} sent you a greeting: ${body.card_data.title}`,
    text: `${profile.full_name} sent you a GifGram! ${body.card_data.title} Open your virtual greeting here: https://gifgrams.com/${body.id}`,
    html: formatReceiverEmail(
      profile.full_name,
      body.card_data.title,
      `https://gifgrams.com/${body.id}`
    ),
  };

  const { response: sgResponse, error: sgError } = await sgMail.send(msg);
  console.error(sgError);
  return NextResponse.json(
    { msg: sgError ? "Sendgrid Error" : "" },
    { status: sgError ? 500 : 200 }
  );
}

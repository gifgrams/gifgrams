import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import CardIdContainer from "@/components/CardIdContainer";

export async function generateMetadata({ params }) {
  // read route params
  const id = params.cardId;

  // fetch data
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.from("card").select().eq("id", id).single();

  return {
    title: data?.card_data.title,
  };
}

export default async function Card({ params, searchParams }) {
  const id = params.cardId;
  const history = searchParams.history !== undefined;

  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.from("card").select().eq("id", id).single();

  return (
    <CardIdContainer
      history={history}
      cardData={data?.card_data}
      cardId={data?.id}
    />
  );
}

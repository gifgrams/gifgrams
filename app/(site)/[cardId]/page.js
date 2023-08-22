import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import CardIdContainer from '@/components/CardIdContainer'

export async function generateMetadata({ params }) {
  // read route params
  const id = params.cardId

  // fetch data
  const supabase = createServerComponentClient({ cookies })
  const { data, error } = await supabase.from('card').select().eq('id', id)
  console.log('error', error)
  console.log('data', data)

  return {
    title: data?.[0].card_data.title,
  }
}

export default async function Card({ params }) {
  const id = params.cardId

  const supabase = createServerComponentClient({ cookies })
  const { data, error } = await supabase.from('card').select().eq('id', id)
  console.log('error', error)
  console.log('data', data)

  return <CardIdContainer cardData={data?.[0].card_data} />
}

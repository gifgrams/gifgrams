import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import CardIdContainer from '@/components/CardIdContainer'

export default async function Card({ params }) {
  const id = params.cardId

  const supabase = createServerComponentClient({ cookies })
  const { data, error } = await supabase.from('card').select().eq('id', id)
  console.log('error', error)
  console.log('data', data)

  return <CardIdContainer cardData={data?.[0].card_data} />
}

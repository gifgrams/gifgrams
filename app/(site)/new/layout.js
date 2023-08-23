import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

export const metadata = {
  title: 'New Card – GifGrams',
}

export default async function NewLayout({ children }) {
  const supabase = createServerComponentClient({ cookies })
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession()
  if (!session) redirect('/signup')

  return children
}

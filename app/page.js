import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import NavBar from '@/components/NavBar'

export const metadata = {
  title: 'GifGrams',
  description: '...',
}

export default async function App() {
  const supabase = createServerComponentClient({ cookies })
  const {
    data: { session },
  } = await supabase.auth.getSession()

  return (
    <>
      <NavBar newBtnVisible={true} />
      <main></main>
    </>
  )
}

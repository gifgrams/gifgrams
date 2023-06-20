import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

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
      <main>
        <h1>hello world</h1>
        <h3>{session?.user.email}</h3>
      </main>
    </>
  )
}

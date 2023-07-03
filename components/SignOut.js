'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

export default async function SignOut() {
  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleSignOut = async () => {
    console.log('signing out')
    await supabase.auth.signOut()
    router.refresh()
    console.log('signed out')
  }

  return <button onClick={handleSignOut}>Sign Out</button>
}

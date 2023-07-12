'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import styles from '@/styles/components/SignOut.module.scss'

export default async function SignOut() {
  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleSignOut = async () => {
    // console.log('signing out')
    await supabase.auth.signOut()
    router.push('/signin')
    // console.log('signed out')
  }

  return (
    <button className={styles.container} onClick={handleSignOut}>
      Sign Out
    </button>
  )
}

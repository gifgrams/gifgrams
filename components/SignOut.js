'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import styles from '@/styles/components/SignOut.module.scss'

export default function SignOut() {
  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/signin')
  }

  return (
    <button className={styles.container} onClick={handleSignOut}>
      Sign Out
    </button>
  )
}

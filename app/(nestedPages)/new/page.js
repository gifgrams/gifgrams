'use client'

import { useEffect } from 'react'
// import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
// import { cookies } from 'next/headers'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import NavBar from '@/components/NavBar'
import styles from '@/styles/app/newPage.module.scss'

export default function App() {
  // const supabase = createServerComponentClient({ cookies })
  // const {
  //   data: { session },
  // } = await supabase.auth.getSession()

  const supabase = createClientComponentClient()
  const router = useRouter()

  useEffect(() => {
    const protectRoute = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()
      console.log('session client /auth', session)
      if (!session) router.push('/signup')
    }
    protectRoute()
  }, [])

  return (
    <div className={styles.container}>
      <NavBar newBtnVisible={true} />
      <main></main>
    </div>
  )
}

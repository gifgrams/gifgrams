'use client'

import { useState, useEffect } from 'react'
// import { cookies } from 'next/headers'
// import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
// import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

import NavBar from '@/components/NavBar'
import SignOut from '@/components/SignOut'
import styles from '@/styles/app/accountPage.module.scss'

// export const dynamic = 'force-dynamic'
// export const fetchCache = 'force-no-store'
// export const dynamicParams = true
// export const revalidate = 0

// export const metadata = {
//   title: 'Account – GifGrams',
// }

export default function Account() {
  const supabase = createClientComponentClient()
  const router = useRouter()
  const [sessionState, setSession] = useState()
  // const supabase = createServerComponentClient({ cookies })

  // const {
  //   data: { session },
  //   error,
  // } = await supabase.auth.getSession()
  // if (error) console.log('Error in getSession() in NavDock.js', error)
  // if (!session) redirect('/signup')

  useEffect(() => {
    const protectRoute = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()
      // console.log('session client /account', session)
      if (!session) router.push('/signup')
      setSession(session)
      // console.log('session?.user.email', session?.user.email)
    }
    protectRoute()
  }, [])

  return (
    <>
      <NavBar />
      <main className={styles.container}>
        <Image
          className={styles.profilePic}
          src="/profile.png"
          alt="profile"
          width={304}
          height={304}
          priority
        ></Image>
        <h1>{sessionState !== undefined && sessionState?.user.email}</h1>
        <SignOut />
      </main>
    </>
  )
}

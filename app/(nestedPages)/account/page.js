'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import NavBar from '@/components/NavBar'
import SignOut from '@/components/SignOut'
import styles from '@/styles/app/accountPage.module.scss'

export const revalidate = 0

// export const metadata = {
//   title: 'Account – GifGrams',
// }

export default function Account() {
  const router = useRouter()
  const [thing, setUser] = useState({ email: 'bztravis' })

  useEffect(() => {
    const getSession = async () => {
      const supabase = createClientComponentClient()
      const {
        data: { user },
      } = await supabase.auth.getUser()
      console.log('user', user)
      console.log('user.email', user.email)
      if (!user) router.replace('/signup')
      setUser(user)
    }
    getSession()
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
        {thing !== null && <h1>{thing?.email}</h1>}
        <SignOut />
      </main>
    </>
  )
}

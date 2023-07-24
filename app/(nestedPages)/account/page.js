import { cookies } from 'next/headers'
import Image from 'next/image'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import NavBar from '@/components/NavBar'
import SignOut from '@/components/SignOut'
import styles from '@/styles/app/accountPage.module.scss'

export const metadata = {
  title: 'Account – GifGrams',
}

export default async function Account() {
  const supabase = createServerComponentClient({ cookies })

  const { data, error } = await supabase.auth.getSession()
  if (error) console.log('Error in getSession() in NavDock.js', error)
  const session = data.session

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
        <h1>{session.user.email}</h1>
        <SignOut />
      </main>
    </>
  )
}

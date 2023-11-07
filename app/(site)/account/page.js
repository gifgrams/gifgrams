import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import NavBar from '@/components/NavBar'
import SignOut from '@/components/SignOut'
import styles from '@/styles/app/accountPage.module.scss'

export const revalidate = 0

export const metadata = {
  title: 'Account – GifGrams',
}

export default async function Account() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { session },
    error,
  } = await supabase.auth.getSession()
  // if (error) console.log('Error in getSession() in NavDock.js', error)
  if (!session) redirect('/signup')

  const { data: profileData, profileError } = await supabase
    .from('profile')
    .select()
    .eq('id', session.user.id)

  console.log('profileData', profileData)

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
        <h1>{profileData[0].email}</h1>
        <h3>GifGrams sent: {profileData[0].cards_sent}</h3>
        <SignOut />
      </main>
    </>
  )
}

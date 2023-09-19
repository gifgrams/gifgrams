import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import styles from '@/styles/app/authLayout.module.scss'

export const revalidate = 0

export default async function authLayout({ children }) {
  const supabase = createServerComponentClient({ cookies })
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession()
  // console.log('session', session)
  if (error) console.log('Error in getSession() in NavDock.js', error)
  if (session) redirect('/')

  return (
    <>
      <div className={styles.container}>
        <Link href="/">
          <Image
            src="/wordmark.svg"
            alt="wordmark"
            width={208}
            height={48}
            priority
          ></Image>
        </Link>
        {children}
      </div>
    </>
  )
}

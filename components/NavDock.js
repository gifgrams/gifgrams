'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import styles from '@/styles/components/NavDock.module.scss'
import New from '@/public/icons/New.svg'
import Widget from '@/public/icons/Widget.svg'

export default function NavDock() {
  const [session, setSession] = useState()

  const supabase = createClientComponentClient()
  useEffect(() => {
    const getSession = async () => {
      const { data, error } = await supabase.auth.getSession()
      setSession(data.session)
    }
    getSession()
  }, [setSession, supabase.auth])

  const router = useRouter()

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Widget
          onClick={() => {
            router.push('/')
          }}
        />
        <New
          onClick={() => {
            router.push('/new')
          }}
        />
      </div>
      {/* /account is a protected route and redirects to signin if no session exists */}
      <Link className={styles.profile} href="/account">
        {session ? (
          <Image
            src="/profile.png"
            width={36}
            height={36}
            alt="pfp"
            priority
            onClick={() => {
              router.push('/account')
            }}
          ></Image>
        ) : (
          <div className={styles.loginBtn}>Sign Up</div>
        )}
      </Link>
    </div>
  )
}

'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import styles from '@/styles/components/NavDock.module.scss'
import New from '@/public/icons/New.svg'
import Widget from '@/public/icons/Widget.svg'

export default function NavDock() {
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
      <Link className={styles.profile} href="/account">
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
      </Link>
    </div>
  )
}

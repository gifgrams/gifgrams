'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
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
      <Image
        className={styles.profile}
        src="/profile.png"
        width={36}
        height={36}
        alt="pfp"
        priority
        onClick={() => {
          router.push('/account')
        }}
      ></Image>
    </div>
  )
}

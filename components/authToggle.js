'use client'

import { useRouter } from 'next/navigation'
import UserCircle from '@/public/icons/UserCircle.svg'
import styles from '@/styles/components/AuthToggle.module.scss'

export default function AuthToggle({ label, path }) {
  const router = useRouter()

  return (
    <div
      className={styles.container}
      onClick={() => {
        router.push(path)
      }}
    >
      <UserCircle />
      <p>{label}</p>
    </div>
  )
}

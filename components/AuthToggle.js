'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import UserCircle from '@/public/icons/UserCircle.svg'
import styles from '@/styles/components/AuthToggle.module.scss'

export default function AuthToggle({ label, href }) {
  const router = useRouter()

  return (
    <Link href={href} className={styles.container}>
      <UserCircle />
      <p>{label}</p>
    </Link>
  )
}

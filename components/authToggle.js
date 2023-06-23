'use client'

import { useRouter } from 'next/navigation'
import Icon from '@/ui/Icon'
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
      <Icon path="User Circle" />
      <p>{label}</p>
    </div>
  )
}

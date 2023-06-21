import Image from 'next/image'
import AuthToggle from '@/components/AuthToggle'
import styles from '@/styles/app/(auth)/layout.module.scss'

export default function authLayout({ children }) {
  return (
    <div className={styles.container}>
      <Image src="/wordmark.svg" alt="wordmark" width={208} height={42}></Image>
      {children}
      <AuthToggle />
    </div>
  )
}

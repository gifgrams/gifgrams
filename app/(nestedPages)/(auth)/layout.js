import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/app/authLayout.module.scss'

export default function authLayout({ children }) {
  return (
    <>
      <div className={styles.container}>
        <Link href="/">
          <Image
            src="/wordmark.svg"
            alt="wordmark"
            width={208}
            height={42}
            priority
          ></Image>
        </Link>
        {children}
      </div>
    </>
  )
}

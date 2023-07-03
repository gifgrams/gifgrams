import Image from 'next/image'
import styles from '@/styles/app/authLayout.module.scss'

export default function authLayout({ children }) {
  return (
    <>
      <div className={styles.container}>
        <Image
          src="/wordmark.svg"
          alt="wordmark"
          width={208}
          height={42}
          priority
        ></Image>
        {children}
      </div>
    </>
  )
}

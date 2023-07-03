import Image from 'next/image'
import Toast from '@/ui/Toast'
import AuthToggle from '@/components/AuthToggle'
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
      {/* <Toast
        open={true}
        severity="error"
        subject={'Error signing in'}
        message={'Your username or password is incorrect.'}
      /> */}
    </>
  )
}

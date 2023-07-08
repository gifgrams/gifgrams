import Image from 'next/image'
import Link from 'next/link'
import NavDock from '@/components/NavDock'
import styles from '@/styles/components/NavBar.module.scss'

export default function NavBar({ newBtnVisible }) {
  return (
    <nav className={styles.container}>
      <div className={styles.content}>
        <Link href="/">
          <Image
            className={styles.wordmark}
            src="/wordmark.svg"
            alt="wordmark"
            width={178}
            height={36}
            priority
          ></Image>
        </Link>
        <NavDock />
      </div>
    </nav>
  )
}

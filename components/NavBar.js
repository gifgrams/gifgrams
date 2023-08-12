import Image from 'next/image'
import Link from 'next/link'
import NavDock from '@/components/NavDock'
import SmallNewButton from '@/components/SmallNewButton'
import styles from '@/styles/components/NavBar.module.scss'

export default function NavBar({ newBtnVisible = true }) {
  return (
    <nav className={styles.container}>
      <div className={styles.content}>
        <Link href="/" className={styles.wordmark}>
          <Image
            src="/wordmark.svg"
            alt="wordmark"
            width={178}
            height={42}
            priority
          ></Image>
        </Link>
        {newBtnVisible && (
          <Link className={styles.newBtn} href="/new">
            <SmallNewButton />
          </Link>
        )}
        <NavDock />
      </div>
    </nav>
  )
}

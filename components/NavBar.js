import Image from 'next/image'
import NavDock from '@/components/NavDock'
import styles from '@/styles/components/NavBar.module.scss'

export default function NavBar({ newBtnVisible }) {
  return (
    <nav className={styles.container}>
      <div className={styles.content}>
        <Image
          className={styles.wordmark}
          src="/wordmark.svg"
          alt="wordmark"
          width={178}
          height={36}
        ></Image>
        <NavDock />
      </div>
    </nav>
  )
}

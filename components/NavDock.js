import Image from 'next/image'
import styles from '@/styles/components/NavDock.module.scss'

export default function NavDock() {
  return (
    <div className={styles.container}>
      <Image
        className={styles.pfp}
        src="/profile.png"
        width={36}
        height={36}
        alt="pfp"
        priority
      ></Image>
    </div>
  )
}

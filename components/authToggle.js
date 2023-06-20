import Image from 'next/image'
import styles from '@/styles/components/AuthToggle.scss'

export default function AuthToggle() {
  return (
    <div className={styles.container}>
      <Image
        src="/icons/User Circle.svg"
        alt="User Circle"
        width={24}
        height={24}
      ></Image>
    </div>
  )
}

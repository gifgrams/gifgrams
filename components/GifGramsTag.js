import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/components/GifGramsTag.module.scss'

export default function GigGramsTag({ accentColor }) {
  return (
    <div className={styles.container} style={{ background: accentColor }}>
      <Link href="/">
        <Image
          src="/wordmark.svg"
          alt="wordmark"
          width={208}
          height={48}
          priority
        ></Image>
      </Link>
    </div>
  )
}

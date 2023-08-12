import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/components/GifGramsTag.module.scss'

export default function GigGramsTag() {
  return (
    <div className={styles.container}>
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

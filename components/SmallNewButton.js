import Link from 'next/link'
import PenNewSquare from '@/public/icons/PenNewSquare.svg'
import styles from '@/styles/components/SmallNewButton.module.scss'

export default function SmallNewButton() {
  return (
    <div className={styles.container}>
      <PenNewSquare />
      New Card
    </div>
  )
}

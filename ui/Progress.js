import ProgressIcon from '@/public/progress.svg'
import styles from '@/styles/ui/Progress.module.scss'

export default function Progress() {
  return (
    <div className={styles.container}>
      <ProgressIcon />
    </div>
  )
}

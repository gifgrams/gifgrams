import ProgressIcon from '@/public/progress.svg'
import styles from '@/styles/ui/Progress.module.scss'

export default function Progress({ containerStyle }) {
  return (
    <div className={styles.container} style={{ ...containerStyle }}>
      <ProgressIcon />
    </div>
  )
}

import styles from '@/styles/app/loading.module.scss'
import Progress from '@/ui/Progress'

export default function Loading() {
  return (
    <div className={styles.container}>
      <Progress
        containerStyle={{ width: '48px', height: '48px', color: '#ffffffa0' }}
      />
    </div>
  )
}

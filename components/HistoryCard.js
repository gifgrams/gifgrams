import CardContainer from '@/components/CardContainer'
import CalendarMinimalistic from '@/public/icons/CalendarMinimalistic.svg'
import User from '@/public/icons/User.svg'
import styles from '@/styles/components/HistoryCard.module.scss'

export default function HistoryCard() {
  return (
    <div className={styles.container}>
      <div className={styles.cropContainer}>
        <CardContainer
          isPreview={true}
          isFront={true}
          containerStyle={{ width: '100%', aspectRatio: 1 }}
        />
      </div>
      <h3>Thank you, John!</h3>
      <div className={styles.detail}>
        <User />
        <h4>Testing</h4>
      </div>
      <div className={styles.detail}>
        <CalendarMinimalistic />
        <h4>Testing</h4>
      </div>
    </div>
  )
}

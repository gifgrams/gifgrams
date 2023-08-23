import moment from 'moment'
import CardContainer from '@/components/CardContainer'
import CalendarMinimalistic from '@/public/icons/CalendarMinimalistic.svg'
import User from '@/public/icons/User.svg'
import styles from '@/styles/components/HistoryCard.module.scss'

export default function HistoryCard({ card }) {
  return (
    <div className={styles.container}>
      <div className={styles.cropContainer}>
        <CardContainer
          isPreview={true}
          isFront={true}
          containerStyle={{ width: '100%', aspectRatio: 1 }}
          cardData={card.card_data}
        />
      </div>
      <h3>{card.card_data.title}</h3>
      <div className={styles.detail}>
        <User />
        <h4>{`${card.card_data.recipientName} ${
          card.card_data.recipientEmail && `${card.card_data.recipientEmail}`
        }`}</h4>
      </div>
      <div className={styles.detail}>
        <CalendarMinimalistic />
        <h4>{moment(card.created_at).format('MMM Do, YYYY')}</h4>
      </div>
    </div>
  )
}

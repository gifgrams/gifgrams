import moment from 'moment';
import CardContainer from '@/components/CardContainer';
import CalendarMinimalistic from '@/public/icons/CalendarMinimalistic.svg';
import Plain from '@/public/icons/Plain.svg';
import User from '@/public/icons/User.svg';
import styles from '@/styles/components/HistoryCard.module.scss';

export default function HistoryCard({ card }) {
  return (
    <div className={styles.container}>
      <div className={styles.cropContainer}>
        <CardContainer
          isPreview={true}
          isFront={true}
          containerStyle={{ width: '100%', aspectRatio: 1 }}
          cardData={card.card_data}
          showOnboarding={false}
          setShowOnboarding={null}
        />
        <div className={styles.shadowOverlay}></div>
      </div>
      <h3>{card.card_data.title}</h3>
      <div className={styles.detail}>
        <Plain />
        <h4>Delivered</h4>
      </div>
      <div className={styles.detail}>
        <User />
        <h4>{getRecipientsString(card.card_data)}</h4>
      </div>
      <div className={styles.detail}>
        <CalendarMinimalistic />
        <h4>{moment(card.created_at).format('MMM Do, YYYY')}</h4>
      </div>
    </div>
  );

  function getRecipientsString(cardData) {
    // new schema
    if (cardData.recipients?.[0].name)
      return cardData.recipients.map((r) => r.name).join(', ');
    // old schema
    else
      return `${cardData.recipientName}${
        cardData.recipientEmail ? ` (${cardData.recipientEmail})` : ''
      }`;
  }
}

import styleBuilder from '@/util/styleBuilder'
import styles from '@/styles/components/Card.module.scss'

export default function Card({
  isPreview,
  cardData = {
    mediaUrl: '',
    accentColor: '#FFC199',
    typeface: 'Monserrat',
    fontSize: 14,
    fontColor: '#000000',
    backgroundColor: '#ffffff',
    message: '',
    title: '',
    recipientName: '',
    recipientEmail: '',
    sendDate: Date.now(),
  },
}) {
  return (
    <div
      className={styleBuilder([
        styles.container,
        [styles.isPreview, isPreview],
      ])}
      style={{
        border: `16px solid ${cardData.accentColor}`,
        background: `${cardData.backgroundColor}`,
        boxShadow: `0px 8px 24px 0px ${cardData.accentColor}c0`,
        pointerEvents: isPreview ? 'none' : 'initial',
      }}
    ></div>
  )
}

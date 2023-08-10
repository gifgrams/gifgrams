import Card from '@/components/Card'
import CardControls from '@/components/CardControls'
import GifGramsTag from '@/components/GifGramsTag'
import styles from '@/styles/components/CardContainer.module.scss'

export default function CardContainer({
  isPreview = false,
  cardData = {
    mediaUrl: '',
    accentColor: '#E0E0E0',
    typeface: 'Monserrat',
    fontSize: 14,
    fontColor: '#000000',
    backgroundColor: '#FFFFFF',
    message: '',
    title: '',
    recipientName: '',
    recipientEmail: '',
    sendDate: Date.now(),
  },
}) {
  return (
    <div className={styles.container}>
      <Card cardData={cardData} />
      <CardControls />
      {!isPreview && <GifGramsTag />}
    </div>
  )
}

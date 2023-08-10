import styleBuilder from '@/util/styleBuilder'
import Card from '@/components/Card'
import CardControls from '@/components/CardControls'
import GifGramsTag from '@/components/GifGramsTag'
import styles from '@/styles/components/CardContainer.module.scss'

export default function CardContainer({
  isPreview = false,
  isFront = true,
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
    <div
      className={styleBuilder([
        styles.container,
        [styles.isPreview, isPreview],
      ])}
    >
      <Card isPreview={isPreview} cardData={cardData} />
      {!isPreview && <CardControls />}
      {!isPreview && <GifGramsTag />}
    </div>
  )
}

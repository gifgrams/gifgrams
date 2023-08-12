import styleBuilder from '@/util/styleBuilder'
import Card from '@/components/Card'
import CardControls from '@/components/CardControls'
import GifGramsTag from '@/components/GifGramsTag'
import styles from '@/styles/components/CardContainer.module.scss'

export default function CardContainer({
  isPreview = false,
  isFront = true,
  containerStyle,
  cardData = {
    mediaUrl: '',
    accentColor: '#ffffff',
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
        ...containerStyle,
        background: `radial-gradient(50% 50.00% at 50% 50.00%, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.3 ) 100%), ${cardData.accentColor}`,
      }}
    >
      <Card isPreview={isPreview} cardData={cardData} />
      {!isPreview && <CardControls />}
      {!isPreview && <GifGramsTag accentColor={cardData.accentColor} />}
    </div>
  )
}

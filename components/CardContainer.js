import styleBuilder from '@/util/styleBuilder'
import Card from '@/components/Card'
import CardControls from '@/components/CardControls'
import GifGramsTag from '@/components/GifGramsTag'
import styles from '@/styles/components/CardContainer.module.scss'

export default function CardContainer({
  isPreview = false,
  isFront,
  setIsFront,
  containerStyle,
  cardData = {
    mediaUrl: '',
    accentColor: '#41C4E0',
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
        background: `radial-gradient(50% 50.00% at 50% 50.00%, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.4 ) 100%), ${cardData.accentColor}`,
      }}
    >
      <Card
        isPreview={isPreview}
        isFront={isFront}
        setIsFront={setIsFront}
        cardData={cardData}
      />
      {!isPreview && <CardControls />}
      {!isPreview && <GifGramsTag accentColor={cardData.accentColor} />}
    </div>
  )
}

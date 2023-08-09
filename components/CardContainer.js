import Card from '@/components/Card'
import GifGramsTag from '@/components/GifGramsTag'
import styles from '@/styles/components/CardContainer.module.scss'

export default function CardContainer({ isPreview = false, cardData }) {
  return (
    <div className={styles.container}>
      <Card cardData={cardData} />
      {!isPreview && <GifGramsTag />}
    </div>
  )
}

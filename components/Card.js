import styleBuilder from '@/util/styleBuilder'
import styles from '@/styles/components/Card.module.scss'

export default function Card({ isPreview, cardData }) {
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

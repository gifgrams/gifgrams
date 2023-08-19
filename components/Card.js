'use client'

import { useState } from 'react'
import styleBuilder from '@/util/styleBuilder'
import styles from '@/styles/components/Card.module.scss'

export default function Card({ isPreview, isFront = true, cardData }) {
  const [front, setFront] = useState(isFront)
  return (
    <div className={styles.scene}>
      <div
        className={styleBuilder([
          styles.container,
          [styles.isPreview, isPreview],
        ])}
        onClick={() => {
          setFront((prev) => !prev)
          console.log('front', front)
        }}
        style={{
          border: `16px solid ${cardData.accentColor}`,
          background: `${cardData.backgroundColor}`,
          boxShadow: `0px 8px 24px 0px ${cardData.accentColor}c0`,
          pointerEvents: isPreview ? 'none' : 'initial',
          transform: front ? 'rotateY(360deg)' : 'rotateY(180deg)',
        }}
      >
        <div className={styles.front}>front</div>
        <div className={styles.back}>back</div>
      </div>
    </div>
  )
}

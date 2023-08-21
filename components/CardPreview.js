'use client'

import { useState, useEffect } from 'react'
import CardContainer from '@/components/CardContainer'
import Button from '@/ui/Button'
import ArrowRight from '@/public/icons/ArrowRight.svg'
import Plain from '@/public/icons/Plain.svg'
import styles from '@/styles/components/CardPreview.module.scss'

export default function CardPreview({ stage, setStage, cardData }) {
  const [isFront, setIsFront] = useState(true)

  useEffect(() => {
    setIsFront(stage === 0)
  }, [stage])

  return (
    <div className={styles.container}>
      <h2>Preview</h2>
      <div className={styles.previewContainer}>
        <CardContainer
          isPreview={true}
          isFront={isFront}
          setIsFront={setIsFront}
          containerStyle={{ height: '100%' }}
          cardData={cardData}
        />
      </div>

      {stage === 2 ? (
        <Button
          // background={stage === 2 ? 'cottonGold' : 'bubbleBlue'}
          background="bubbleBlue"
          color="justWhite"
          style={{
            width: '100%',
            background: '#FFE058',
            // textShadow: '0 0 12px rgba(0, 0, 0, 0.2);',
          }}
          disabled={
            !(
              cardData.title &&
              cardData.recipientName &&
              cardData.recipientEmail &&
              cardData.sendDate
            )
          }
        >
          Send
          <Plain />
        </Button>
      ) : (
        <Button
          // background={stage === 2 ? 'cottonGold' : 'bubbleBlue'}
          background="bubbleBlue"
          color="justWhite"
          style={{
            width: '100%',
            // textShadow: '0 0 12px rgba(0, 0, 0, 0.2);',
          }}
          onClick={() => {
            setStage((prev) => prev + 1)
          }}
          disabled={
            (stage === 0 && !cardData.mediaUrl) ||
            (stage === 1 && !cardData.message)
          }
        >
          Next
          <ArrowRight />
        </Button>
      )}
    </div>
  )
}

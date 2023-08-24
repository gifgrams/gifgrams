'use client'

import { useState } from 'react'
import CardContainer from '@/components/CardContainer'

export default function CardIdContainer({ cardData, history }) {
  const [isFront, setIsFront] = useState(true)

  return (
    <>
      {cardData ? (
        <CardContainer
          isFront={isFront}
          setIsFront={setIsFront}
          history={history}
          cardData={cardData}
        />
      ) : (
        "Oops! The card you're looking for doesn't exist!"
      )}
    </>
  )
}

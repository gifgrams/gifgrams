'use client'

import { useState, useEffect } from 'react'
import moment from 'moment'
import CardContainer from '@/components/CardContainer'

export default function CardIdContainer({ cardData, history }) {
  const [isFront, setIsFront] = useState(true)
  const [showOnboarding, setShowOnboarding] = useState(false)

  useEffect(() => {
    const gg_lastCardOnboarding = localStorage.getItem('gg_lastCardOnboarding')

    if (
      gg_lastCardOnboarding === null ||
      moment(gg_lastCardOnboarding).diff(moment(), 'months') <= -3
    ) {
      // console.log('TIME TO ONBOARD')
      setShowOnboarding(true)
    }

    localStorage.setItem('gg_lastCardOnboarding', moment().toISOString())
  }, [])

  return (
    <>
      {cardData ? (
        <CardContainer
          isFront={isFront}
          setIsFront={setIsFront}
          history={history}
          cardData={cardData}
          showOnboarding={showOnboarding}
          setShowOnboarding={setShowOnboarding}
        />
      ) : (
        "Oops! The card you're looking for doesn't exist!"
      )}
    </>
  )
}

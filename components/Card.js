'use client'

import { useState, useEffect } from 'react'
import moment from 'moment'
import styleBuilder from '@/util/styleBuilder'
import GalleryAdd from '@/public/icons/GalleryAdd.svg'
import styles from '@/styles/components/Card.module.scss'

export default function Card({ isPreview, isFront, setIsFront, cardData }) {
  const [showOnboarding, setShowOnboarding] = useState(false)
  useEffect(() => {
    const gg_lastCardOnboarding = localStorage.getItem('gg_lastCardOnboarding')

    if (
      gg_lastCardOnboarding === undefined ||
      moment(gg_lastCardOnboarding).diff(moment(), 'seconds') <= -3
    ) {
      console.log('TIME TO ONBOARD')
      setShowOnboarding(true)
    }

    localStorage.setItem('gg_lastCardOnboarding', moment().toISOString())
  }, [])

  return (
    <div className={styles.scene}>
      <div
        className={styleBuilder([
          styles.container,
          [styles.isPreview, isPreview],
        ])}
        onClick={() => {
          if (isPreview) return
          setIsFront((prev) => !prev)
          // console.log('isFront', isFront)
        }}
        style={{
          border: `16px solid ${cardData.accentColor}`,
          boxShadow: `0px 8px 24px 0px ${cardData.accentColor}c0`,
          // pointerEvents: isPreview ? 'none' : 'initial',
          transform: isFront ? 'rotateY(360deg)' : 'rotateY(180deg)',
        }}
      >
        {cardData.mediaUrl ? (
          <img
            className={styles.front}
            src={cardData.mediaUrl}
            style={{
              background: cardData.backgroundColor,
            }}
            draggable={false}
          ></img>
        ) : (
          <div className={styles.front}>
            <GalleryAdd />
            <p>Select an image for the front of the card.</p>
          </div>
        )}
        <div
          className={styleBuilder([
            styles.back,
            [styles.fontSmall, cardData.fontSize === 'Small'],
            [styles.fontMedium, cardData.fontSize === 'Medium'],
            [styles.fontLarge, cardData.fontSize === 'Large'],
            styles[cardData.typeface.replaceAll(' ', '')],
          ])}
          style={{
            color: cardData.fontColor,
            background: cardData.backgroundColor,
          }}
        >
          {cardData.message}
        </div>
        <div className={styles.onboarding}></div>
      </div>
    </div>
  )
}

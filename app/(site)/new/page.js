'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Confetti from 'react-confetti'
import moment from 'moment'
import useWindowSize from 'react-use/lib/useWindowSize'
import CardPreview from '@/components/CardPreview'
import CustomizeOne from '@/components/CustomizeOne'
import CustomizeTwo from '@/components/CustomizeTwo'
import CustomizeThree from '@/components/CustomizeThree'
import NavBar from '@/components/NavBar'
import NewProgress from '@/components/NewProgress'
import styles from '@/styles/app/newPage.module.scss'

export default function App() {
  const { width, height } = useWindowSize()

  const [stage, setStage] = useState(0)
  const [formData, setFormData] = useState({
    mediaUrl: '',
    accentColor: '#41C4E0',
    typeface: 'Monserrat',
    fontSize: 'Medium',
    fontColor: '#303030',
    backgroundColor: '#FFFFFF',
    message: '',
    title: '',
    recipientName: '',
    recipientEmail: '',
    sendDate: moment().format('YYYY-MM-DD'),
  })
  const [cardId, setCardId] = useState(crypto.randomUUID())
  const [confetti, setConfetti] = useState(false)

  const scrollRef = useRef()

  useEffect(() => {
    if (scrollRef) scrollRef.current.scrollTop = 0
  }, [stage])

  return (
    <div className={styles.container} ref={scrollRef}>
      <NavBar newBtnVisible={false} />
      <main>
        <NewProgress stage={stage} setStage={setStage} />
        <div className={styles.twoCol}>
          {stage === 0 && (
            <CustomizeOne
              formData={formData}
              setFormData={setFormData}
              cardId={cardId}
            />
          )}
          {stage === 1 && (
            <CustomizeTwo formData={formData} setFormData={setFormData} />
          )}
          {stage === 2 && (
            <CustomizeThree formData={formData} setFormData={setFormData} />
          )}
          <CardPreview
            stage={stage}
            setStage={setStage}
            setConfetti={setConfetti}
            cardData={formData}
            cardId={cardId}
          />
        </div>
      </main>
      {confetti && (
        <Confetti
          width={width}
          height={height}
          recycle={false}
          style={{ zIndex: 20 }}
        />
      )}
    </div>
  )
}

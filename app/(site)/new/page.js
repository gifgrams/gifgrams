'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import moment from 'moment'
import CardPreview from '@/components/CardPreview'
import CustomizeOne from '@/components/CustomizeOne'
import CustomizeTwo from '@/components/CustomizeTwo'
import CustomizeThree from '@/components/CustomizeThree'
import NavBar from '@/components/NavBar'
import NewProgress from '@/components/NewProgress'
import styles from '@/styles/app/newPage.module.scss'

export default function App() {
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
            <CustomizeOne formData={formData} setFormData={setFormData} />
          )}
          {stage === 1 && (
            <CustomizeTwo formData={formData} setFormData={setFormData} />
          )}
          {stage === 2 && (
            <CustomizeThree formData={formData} setFormData={setFormData} />
          )}
          <CardPreview stage={stage} setStage={setStage} cardData={formData} />
        </div>
      </main>
    </div>
  )
}

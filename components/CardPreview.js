'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import CardContainer from '@/components/CardContainer'
import emitToast from '@/ui/Toast'
import Button from '@/ui/Button'
import ArrowRight from '@/public/icons/ArrowRight.svg'
import Plain from '@/public/icons/Plain.svg'
import styles from '@/styles/components/CardPreview.module.scss'

export default function CardPreview({ stage, setStage, cardData }) {
  const supabase = createClientComponentClient()
  const router = useRouter()

  const [isFront, setIsFront] = useState(true)
  const [sendPending, setSendPending] = useState(false)

  useEffect(() => {
    setIsFront(stage !== 1)
  }, [stage])

  const sendCard = async () => {
    setSendPending(true)
    const {
      data: { user },
    } = await supabase.auth.getUser()
    const payload = {
      id: crypto.randomUUID(),
      user_id: user.id,
      card_data: cardData,
    }
    fetch('/api/v1/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }).then((res) => {
      if (!res.ok) {
        emitToast(
          'Error sending card',
          'There was an unexpected error sending this card. Do not close this tab or unsaved data will be lost.',
          'error'
        )
        setSendPending(false)
      } else {
        emitToast(
          'Your GifGram is on its way!',
          'Redirecting to home...',
          'success'
        )
        setSendPending(false)
        setTimeout(() => {
          router.refresh()
          router.push('/')
        }, 3000)
      }
    })
  }

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
          loading={sendPending}
          style={{
            width: '100%',
            // textShadow: '0 0 12px rgba(0, 0, 0, 0.2);',
          }}
          variant="send"
          disabled={
            !(
              cardData.title &&
              cardData.recipientName &&
              cardData.recipientEmail &&
              cardData.sendDate
            )
          }
          onClick={() => {
            sendCard()
          }}
        >
          Send
          <Plain />
        </Button>
      ) : (
        <Button
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

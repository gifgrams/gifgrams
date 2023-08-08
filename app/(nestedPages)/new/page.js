'use client'

import { useState, useEffect } from 'react'
// import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
// import { cookies } from 'next/headers'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import MediaSelector from '@/components/MediaSelector'
import NavBar from '@/components/NavBar'
import NewProgress from '@/components/NewProgress'
import styles from '@/styles/app/newPage.module.scss'

export default function App() {
  // const supabase = createServerComponentClient({ cookies })
  // const {
  //   data: { session },
  // } = await supabase.auth.getSession()

  const [stage, setStage] = useState(2)
  const [formData, setFormData] = useState({
    mediaUrl: '',
    accentColor: '#E0E0E0',
    typeface: 'Monserrat',
    fontSize: 14,
    fontColor: '#000000',
    backgroundColor: '#FFFFFF',
    message: '',
    title: '',
    recipientName: '',
    recipientEmail: '',
    sendDate: Date.now(),
  })

  const supabase = createClientComponentClient()
  const router = useRouter()

  /* useEffect(() => {
    const protectRoute = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()
      console.log('session client /auth', session)
      if (!session) router.push('/signup')
    }
    protectRoute()
  }, []) */

  return (
    <div className={styles.container}>
      <NavBar newBtnVisible={false} />
      <main>
        <NewProgress stage={stage} setStage={setStage} />
        <div className={styles.twoCol}>
          <div>
            <h2>Front</h2>
            <MediaSelector setFormData={setFormData} />
          </div>
          <div className={styles.gridItem}></div>
        </div>
      </main>
    </div>
  )
}

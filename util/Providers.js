'use client'

import { useState, useEffect, createContext } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export const SessionContext = createContext(null)

export default function Providers({ children }) {
  const supabase = createClientComponentClient()
  const [session, setSession] = useState()

  useEffect(() => {
    const getSession = async () => {
      const ses = await supabase.auth.getSession()
      setSession(ses?.data?.session)
      console.log('session', ses)
    }
    getSession()
  }, [supabase.auth])

  return (
    <SessionContext.Provider value={session}>
      {children}
    </SessionContext.Provider>
  )
}

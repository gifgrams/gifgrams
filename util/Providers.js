'use client'

import { useState, useEffect, createContext } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export const AuthContext = createContext(null)

export default function Providers({ children }) {
  const supabase = createClientComponentClient()
  const [auth, setAuth] = useState()

  useEffect(() => {
    const getAuth = async () => {
      setAuth(await supabase.auth.getUser())
    }
    getAuth()
  }, [supabase.auth])

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

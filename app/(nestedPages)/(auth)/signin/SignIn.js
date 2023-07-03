'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { useState, useContext } from 'react'
import { toast } from 'react-toastify'
import TextInput from '@/ui/TextInput'
import Button from '@/ui/Button'
import AuthToggle from '@/components/AuthToggle'
import styles from '@/styles/app/signin.module.scss'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) {
      console.log('Error signing in')
      toast.error('Error signing in')
    } else router.refresh()
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <>
      <div className={styles.container}>
        <h1>Sign In</h1>
        <TextInput
          label="Email"
          placeholder="Email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <TextInput
          label="Password"
          placeholder="Password"
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <Button
          label="Sign In"
          background="bubbleBlue"
          color="justWhite"
          style={{ marginTop: '48px' }}
          onClick={handleSignIn}
        />
      </div>
      <AuthToggle label="Sign Up" href="/signup" />
    </>
  )
}

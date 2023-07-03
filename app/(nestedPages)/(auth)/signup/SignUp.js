'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import TextInput from '@/ui/TextInput'
import Button from '@/ui/Button'
import AuthToggle from '@/components/AuthToggle'
import styles from '@/styles/app/signin.module.scss'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleSignUp = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    })
    console.log(data, error)
    router.refresh()
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <>
      <div className={styles.container}>
        <h1>Sign Up</h1>
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
          label="Sign Up"
          background="bubbleBlue"
          color="justWhite"
          style={{ marginTop: '48px' }}
          onClick={handleSignUp}
        />
      </div>
      <AuthToggle label="Sign In" href="/signin" />
    </>
  )
}

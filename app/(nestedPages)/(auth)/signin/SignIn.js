'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { useState, useContext } from 'react'
import emitToast from '@/ui/Toast'
import AuthToggle from '@/components/AuthToggle'
import Button from '@/ui/Button'
import TextInput from '@/ui/TextInput'
import styles from '@/styles/app/signin.module.scss'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleSignIn = async (e) => {
    e.preventDefault()

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) {
      console.error('Error signing in')
      emitToast(
        'Error signing in',
        'Username or password is incorrect.',
        'error'
      )
    } else router.refresh()
  }

  return (
    <>
      <div className={styles.container}>
        <h1>Sign In</h1>
        <form onSubmit={handleSignIn}>
          <TextInput
            label="Email"
            placeholder="Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <TextInput
            label="Password"
            placeholder="Password"
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <Button
            label="Sign In"
            background="bubbleBlue"
            color="justWhite"
            style={{ marginTop: '48px' }}
            onClick={handleSignIn}
          />
        </form>
      </div>
      <AuthToggle label="Sign Up" href="/signup" />
    </>
  )
}

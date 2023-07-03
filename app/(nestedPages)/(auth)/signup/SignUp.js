'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Button from '@/ui/Button'
import TextInput from '@/ui/TextInput'
import emitToast from '@/ui/Toast'
import AuthToggle from '@/components/AuthToggle'
import styles from '@/styles/app/signin.module.scss'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleSignUp = async (e) => {
    e.preventDefault()

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    })
    if (error) {
      console.error('Error signing up')
      emitToast('Error signing up', 'Username or password is invalid.', 'error')
    }
    // router.refresh()
    emitToast(
      'A verification link has been sent',
      `Note: if an account for ${email} already exists, no link will be sent.`,
      'success'
    )
  }

  return (
    <>
      <div className={styles.container}>
        <h1>Sign Up</h1>
        <form>
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
            label="Sign Up"
            background="bubbleBlue"
            color="justWhite"
            style={{ marginTop: '48px' }}
            onClick={handleSignUp}
          />
        </form>
      </div>
      <AuthToggle label="Sign In" href="/signin" />
    </>
  )
}

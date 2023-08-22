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
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleSignUp = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    })
    if (error) {
      console.error('Error signing up', error)
      emitToast('Error signing up', 'Username or password is invalid.', 'error')
    } else {
      emitToast(
        'A verification link has been sent',
        `Note: if an account for ${email} already exists, no link will be sent.`,
        'success'
      )
      router.push('/signin')
    }

    setSubmitting(false)
  }

  return (
    <>
      <div className={styles.container}>
        <h1>Sign Up</h1>
        <form>
          <TextInput
            label="Full Name"
            placeholder="Goofy Goober"
            name="name"
            containerStyle={{ marginTop: 24 }}
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
          <TextInput
            label="Email"
            placeholder="goofy@goobers.com"
            name="email"
            containerStyle={{ marginTop: 24 }}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <TextInput
            label="Password"
            placeholder="1234"
            type="password"
            name="password"
            containerStyle={{ marginTop: 24 }}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <Button
            style={{ marginTop: '48px' }}
            loading={submitting}
            onClick={handleSignUp}
          >
            Sign Up
          </Button>
        </form>
      </div>
      <AuthToggle label="Sign In" href="/signin" />
    </>
  )
}

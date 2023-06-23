'use client'

import styles from '@/styles/ui/TextInput.module.scss'

export default function TextInput({ label, placeholder, ...inputProps }) {
  return (
    <div className={styles.container}>
      <h3>{label ?? ''}</h3>
      <input placeholder={placeholder ?? ''} {...inputProps}></input>
    </div>
  )
}

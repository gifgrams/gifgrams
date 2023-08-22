'use client'

import { useId } from 'react'
import styles from '@/styles/ui/TextInput.module.scss'

export default function TextInput({
  label,
  placeholder,
  containerStyle,
  searchInput,
  ...inputProps
}) {
  const id = useId()
  return (
    <div className={styles.container} style={containerStyle}>
      {label !== undefined && (
        <label htmlFor={id}>
          <h3>{label}</h3>
        </label>
      )}
      <input
        ref={searchInput}
        id={id}
        placeholder={placeholder ?? ''}
        {...inputProps}
      ></input>
    </div>
  )
}

'use client'

import { useId } from 'react'
import styles from '@/styles/ui/TextArea.module.scss'

export default function TextArea({
  label,
  placeholder,
  containerStyle,
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
      <textarea
        id={id}
        placeholder={placeholder ?? ''}
        {...inputProps}
      ></textarea>
    </div>
  )
}

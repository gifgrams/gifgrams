'use client'

import { useId } from 'react'
import styles from '@/styles/ui/Select.module.scss'

export default function Select({
  label,
  containerStyle,
  children,
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
      <select id={id} {...inputProps}>
        {...children}
      </select>
    </div>
  )
}

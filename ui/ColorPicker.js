'use client'

import { useId } from 'react'
import styles from '@/styles/ui/ColorPicker.module.scss'

export default function ColorPicker({ label, containerStyle, ...inputProps }) {
  const id = useId()
  return (
    <div className={styles.container} style={containerStyle}>
      {label !== undefined && (
        <label htmlFor={id}>
          <h3>{label}</h3>
        </label>
      )}
      <input id={id} type="color" {...inputProps}></input>
    </div>
  )
}

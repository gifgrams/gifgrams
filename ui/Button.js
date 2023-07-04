import { colors } from '@/constants'
import styleBuilder from '@/util/styleBuilder'
import Progress from '@/ui/Progress'
import styles from '@/styles/ui/Button.module.scss'

export default function Button({
  children,
  background,
  color,
  loading = false,
  disabled = loading,
  onClick,
  style,
  ...buttonProps
}) {
  console.log('disabled', disabled, 'loading', loading)
  return (
    <div className={styles.container}>
      <button
        className={styleBuilder([[styles.disabled, loading || disabled]])}
        style={{
          ...{
            background: colors[background],
            color: `${colors[color]}${disabled ? '80' : 'ff'}`,
          },
          ...style,
        }}
        disabled={disabled}
        onClick={onClick}
        {...buttonProps}
      >
        {loading && <Progress />}
        {children}
      </button>
    </div>
  )
}

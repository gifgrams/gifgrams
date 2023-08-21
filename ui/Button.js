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
  variant,
  style,
  ...buttonProps
}) {
  return (
    <div className={styles.container}>
      <button
        className={styleBuilder([
          [styles.disabled, loading || disabled],
          [styles[variant], variant],
        ])}
        style={{
          ...{
            background: colors[background],
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

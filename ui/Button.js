import { colors } from '@/constants'
import Icon from '@/ui/Icon'
import styles from '@/styles/ui/Button.module.scss'

export default function Button(props) {
  const { icon, label, background, color, onClick, style, ...buttonProps } =
    props
  return (
    <div className={styles.container}>
      <button
        style={{
          ...{ background: colors[background], color: colors[color] },
          ...style,
        }}
        onClick={onclick}
        {...buttonProps}
      >
        {icon && <Icon width={24} path={icon} />}
        <p>{label}</p>
      </button>
    </div>
  )
}

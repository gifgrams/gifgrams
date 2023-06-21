import Icon from '@/ui/Icon'
import styles from '@/ui/Button.modules.scss'

export default function Button({ icon, label, onClick }) {
  return (
    <div className={styles.container}>
      <button onClick={onclick}>
        <Icon width={24} path={icon} />
      </button>
    </div>
  )
}

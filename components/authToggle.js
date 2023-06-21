import Icon from '@/ui/Icon'
import styles from '@/styles/components/AuthToggle.module.scss'

export default function AuthToggle() {
  return (
    <div className={styles.container}>
      <Icon path="User Circle" />
      <p>Sign Up</p>
    </div>
  )
}

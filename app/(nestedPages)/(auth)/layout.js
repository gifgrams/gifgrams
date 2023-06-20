import styles from './layout.module.scss'

export default function authLayout({ children }) {
  return <div className={styles.container}>{children}</div>
}

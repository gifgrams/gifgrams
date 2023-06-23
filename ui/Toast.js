import styles from '@/styles/ui/Toast.module.scss'

export default function Toast({ open, subject, message }) {
  return (
    <>
      {open && (
        <div className={styles.container}>
          <div>
            <h3>{subject}</h3>
            <p>{message}</p>
          </div>
        </div>
      )}
    </>
  )
}

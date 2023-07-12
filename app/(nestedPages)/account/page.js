import NavBar from '@/components/NavBar'
import styles from '@/styles/app/accountPage.module.scss'

export default function Account() {
  return (
    <>
      <NavBar />
      <main className={styles.container}>
        <h1>account</h1>
      </main>
    </>
  )
}

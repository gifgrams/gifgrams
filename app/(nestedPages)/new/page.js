import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import NavBar from '@/components/NavBar'
import styles from '@/styles/app/newPage.module.scss'

export const metadata = {
  title: 'New Card – GifGrams',
}

export default async function App() {
  const supabase = createServerComponentClient({ cookies })
  const {
    data: { session },
  } = await supabase.auth.getSession()

  return (
    <div className={styles.container}>
      <NavBar newBtnVisible={true} />
      <main></main>
    </div>
  )
}

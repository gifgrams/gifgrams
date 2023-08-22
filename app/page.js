import Link from 'next/link'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import HistoryCard from '@/components/HistoryCard'
import NavBar from '@/components/NavBar'
import SmallNewButton from '@/components/SmallNewButton'
import styles from '@/styles/app/rootPage.module.scss'

export const metadata = {
  title: 'GifGrams',
}

export default async function App() {
  const supabase = createServerComponentClient({ cookies })
  const {
    data: { user },
  } = await supabase.auth.getUser()
  const { data, error } = await supabase
    .from('card')
    .select()
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })
  console.log('data', data)

  return (
    <div className={styles.container}>
      <NavBar newBtnVisible={true} />
      <main>
        <div className={styles.content}>
          <Link className={styles.newBtn} href="/new">
            <SmallNewButton />
          </Link>
          <h1>Send History</h1>
          <div className={styles.cardContainer}>
            {data?.map((elem, index) => (
              <Link key={index} href={`/${elem.id}`} target="_blank">
                <HistoryCard card={elem} />
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

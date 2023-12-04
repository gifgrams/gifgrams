import Link from 'next/link'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import moment from 'moment'
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
  const { data, error } = user
    ? await supabase
      .from('card')
      .select()
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
    : { data: [], error: null }
  const dataWithStarter = [
    ...data,
    {
      id: 'e803424a-4ba4-4863-98c4-4a0fccb99230',
      created_at: user ? moment(user.created_at) : moment(),
      card_data: {
        title: 'Welcome! (click me)',
        message: '',
        fontSize: 'Medium',
        mediaUrl:
          'https://media.tenor.com/oC8CSq25wx4AAAAC/baby-yoda-welcome.gif',
        sendDate: '',
        typeface: 'Monserrat',
        fontColor: '#303030',
        accentColor: '#41c4e1',
        recipientName: 'You',
        recipientEmail: '',
        backgroundColor: '#FFFFFF',
      },
    },
  ]

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
            {dataWithStarter?.map((elem, index) => (
              <Link
                key={index}
                href={`/${elem.id}?history=true`}
                target="_blank"
              >
                <HistoryCard card={elem} />
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

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
  const { data, error } = await supabase
    .from('card')
    .select()
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })
  console.log('data', data)
  const dataWithStarter = [
    ...data,
    {
      id: '03e13bb9-fe88-4cb4-8ffe-1221b1a366f9',
      created_at: moment(),
      card_data: {
        title: 'Welcome!',
        message:
          "Welcome to GifGrams!\n\nMy name's Brian, and I created GifGrams to make personalized e-cards better and free-er. \n\nI hope the experience receiving a GifGram is more delightful than simply receiving a text message, and more fun for the designer too (YOU!) :)\n\nIf you have any questions or suggestions, I'd appreciate it if you reached out to me at bztravis@umich.edu.\n\nBest,\nBrian",
        fontSize: 'Medium',
        mediaUrl:
          'https://media.tenor.com/oC8CSq25wx4AAAAC/baby-yoda-welcome.gif',
        sendDate: '',
        typeface: 'Monserrat',
        fontColor: '#303030',
        accentColor: '#41c4e1',
        recipientName: 'New user',
        recipientEmail: 'you!',
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

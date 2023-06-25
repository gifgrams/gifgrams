import '@/styles/globals.scss'
import localFont from 'next/font/local'
import Toast from '@/ui/Toast'

const generalSans = localFont({
  src: [
    {
      path: '../fonts/GeneralSans-Variable.ttf',
    },
  ],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={generalSans.className}>{children}</body>
    </html>
  )
}

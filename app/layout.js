'use client'

import ToastContainer from '@/components/ToastContainer'
import '@/styles/globals.scss'
import localFont from 'next/font/local'

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
      <body className={generalSans.className}>
        {children}
        <ToastContainer />
      </body>
    </html>
  )
}

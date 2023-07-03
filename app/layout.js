'use client'

import styled from 'styled-components'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '@/styles/globals.scss'
import localFont from 'next/font/local'

const generalSans = localFont({
  src: [
    {
      path: '../fonts/GeneralSans-Variable.ttf',
    },
  ],
})

const StyledContainer = styled(ToastContainer)`
  // https://styled-components.com/docs/faqs#how-can-i-override-styles-with-higher-specificity
  &&&.Toastify__toast-container {
  }
  .Toastify__toast {
    padding: 0;
    margin: 12px 0px 0px 0px;
    overflow: visible;
    background: none;
    box-shadow: none;
  }
  .Toastify__toast-body {
    padding: 0;
    animation: none;
  }
  Toastify__toast-container {
    right: 24px;
    bottom: 24px;
  }
`

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={generalSans.className}>
        {children}
        <StyledContainer
          position="bottom-right"
          autoClose={5000}
          closeButton={false}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
        />
      </body>
    </html>
  )
}

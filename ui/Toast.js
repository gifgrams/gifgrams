import localFont from 'next/font/local'
import { toast } from 'react-toastify'
import styleBuilder from '@/util/styleBuilder'
import styles from '@/styles/ui/Toast.module.scss'
import ErrorIcon from '@/public/icons/Error.svg'
import InfoIcon from '@/public/icons/Info.svg'
import SuccessIcon from '@/public/icons/Success.svg'

const generalSans = localFont({
  src: [
    {
      path: '../fonts/GeneralSans-Variable.ttf',
    },
  ],
})

const icons = {
  error: <ErrorIcon />,
  info: <InfoIcon />,
  success: <SuccessIcon />,
}

function Toast({ open = true, severity = 'info', subject, message }) {
  return (
    <>
      {open && (
        <div
          className={styleBuilder([
            styles.container,
            styles[severity],
            generalSans.className,
          ])}
        >
          {icons[severity]}
          <div>
            <h3>{subject}</h3>
            <p>{message}</p>
          </div>
        </div>
      )}
    </>
  )
}

/**
 * Emit an in-app notification on screen.
 * @param {string} subject Optional bolded subject line
 * @param {string} message Optional message
 * @param {string} severity Optional severity of notification
 */
export default function emitToast(
  subject = '',
  message = '',
  severity = 'info'
) {
  toast(<Toast severity={severity} subject={subject} message={message} />)
}

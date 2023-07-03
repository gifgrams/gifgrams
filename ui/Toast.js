import { toast } from 'react-toastify'
import styleBuilder from '@/util/styleBuilder'
import styles from '@/styles/ui/Toast.module.scss'
import ErrorIcon from '@/public/icons/Error.svg'
import InfoIcon from '@/public/icons/Info.svg'
import SuccessIcon from '@/public/icons/Success.svg'

const icons = {
  error: <ErrorIcon />,
  info: <InfoIcon />,
  success: <SuccessIcon />,
}

function Toast({ open = true, severity = 'info', subject, message }) {
  return (
    <>
      {open && (
        <div className={styleBuilder([styles.container, styles[severity]])}>
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

export default function emitToast(subject, message, severity = 'info') {
  toast(<Toast severity={severity} subject={subject} message={message} />)
}

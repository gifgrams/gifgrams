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

export default function Toast({ open, severity = 'info', subject, message }) {
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

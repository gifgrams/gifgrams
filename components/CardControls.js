import UndoLeftRoundSquare from '@/public/icons/UndoLeftRoundSquare.svg'
import styles from '@/styles/components/CardControls.module.scss'

export default function CardControls() {
  return (
    <div className={styles.container}>
      <button>
        <UndoLeftRoundSquare />
        Send a free response
      </button>
    </div>
  )
}

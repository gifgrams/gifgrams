import UndoLeftRoundSquare from '@/public/icons/UndoLeftRoundSquare.svg'
import styles from '@/styles/components/CardControls.module.scss'

const reactions = ['😁', '😂', '❤️', '🙏', '🥳']

export default function CardControls() {
  return (
    <div className={styles.container}>
      <button>
        <UndoLeftRoundSquare />
        Send a free response
      </button>
      <div className={styles.reactionContainer}>
        {reactions.map((elem) => (
          <button>{elem}</button>
        ))}
      </div>
    </div>
  )
}

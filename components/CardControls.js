import styleBuilder from '@/util/styleBuilder'
import UndoLeftRoundSquare from '@/public/icons/UndoLeftRoundSquare.svg'
import styles from '@/styles/components/CardControls.module.scss'

const reactions = ['😁', '😂', '❤️', '🙏', '🥳']

export default function CardControls({ isFront }) {
  return (
    <div
      className={styleBuilder([styles.container, [styles.isFront, isFront]])}
    >
      <button>
        <UndoLeftRoundSquare />
        Send a free response
      </button>
      <div className={styles.reactionContainer}>
        {reactions.map((elem, index) => (
          <button key={index}>{elem}</button>
        ))}
      </div>
    </div>
  )
}

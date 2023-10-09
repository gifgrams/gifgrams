import styleBuilder from '@/util/styleBuilder'
import UndoLeftRoundSquare from '@/public/icons/UndoLeftRoundSquare.svg'
import styles from '@/styles/components/CardControls.module.scss'

const reactions = ['😁', '😂', '❤️', '🙏', '🥳']

export default function CardControls({ isFront }) {
  const alertComingSoon = (feature) => {
    alert(`${feature} are coming soon! Hang tight :)`)
  }

  return (
    <div
      className={styleBuilder([styles.container, [styles.isFront, isFront]])}
    >
      <button onClick={() => alertComingSoon('Email respones')}>
        <UndoLeftRoundSquare />
        Send a free response
      </button>
      <div className={styles.reactionContainer}>
        {reactions.map((elem, index) => (
          <button
            key={index}
            onClick={() => alertComingSoon('Emoji reactions')}
          >
            {elem}
          </button>
        ))}
      </div>
    </div>
  )
}

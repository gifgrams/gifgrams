import styleBuilder from '@/util/styleBuilder'
import RoundArrowLeft from '@/public/icons/RoundArrowLeft.svg'
import styles from '@/styles/components/NewProgress.module.scss'

export default function NewProgress({ stage, setStage }) {
  return (
    <div className={styles.container}>
      {stage > 0 && (
        <button
          className={styles.back}
          onClick={() => {
            setStage((prev) => prev - 1)
          }}
        >
          <RoundArrowLeft />
        </button>
      )}
      <div className={styles.pill}>
        {[0, 1, 2].map((elem) => (
          <button
            key={elem}
            className={styleBuilder([
              styles.stageBtn,
              [styles.active, stage === elem],
            ])}
            onClick={() => {
              setStage(elem)
            }}
          >
            {elem + 1}
          </button>
        ))}
      </div>
    </div>
  )
}

import MediaSelector from '@/components/MediaSelector'
import ColorPicker from '@/ui/ColorPicker'
import styles from '@/styles/components/CustomizeOne.module.scss'

export default function CustomizeOne({ setFormData }) {
  return (
    <div className={styles.container}>
      <h2>Front</h2>
      <MediaSelector setFormData={setFormData} />
      <ColorPicker label="Accent Color" containerStyle={{ marginTop: 24 }} />
    </div>
  )
}

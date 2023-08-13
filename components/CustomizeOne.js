import MediaSelector from '@/components/MediaSelector'
import ColorPicker from '@/ui/ColorPicker'
import styles from '@/styles/components/CustomizeOne.module.scss'

export default function CustomizeOne({ formData, setFormData }) {
  return (
    <div className={styles.container}>
      <h2>Front</h2>
      <MediaSelector formData={formData} setFormData={setFormData} />
      <ColorPicker
        label="Accent Color"
        containerStyle={{ marginTop: 24 }}
        value={formData.accentColor}
        onChange={(e) => {
          setFormData((prev) => {
            return { ...prev, accentColor: e.target.value }
          })
        }}
      />
    </div>
  )
}

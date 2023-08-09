import Select from '@/ui/Select'
import ColorPicker from '@/ui/ColorPicker'
import styles from '@/styles/components/CustomizeTwo.module.scss'

export default function CustomizeOne({ setFormData }) {
  return (
    <>
      <div className={styles.container}>
        <h2>Back</h2>
        <div className={styles.grid}>
          <Select label="Font">
            <option>default</option>
            <option>other</option>
          </Select>
          <Select label="Font">
            <option>default</option>
            <option>other</option>
          </Select>
          <ColorPicker label="Font Color" containerStyle={{ marginTop: 24 }} />
          <ColorPicker
            label="Background Color"
            containerStyle={{ marginTop: 24 }}
          />
        </div>
      </div>
    </>
  )
}

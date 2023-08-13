import ColorPicker from '@/ui/ColorPicker'
import Select from '@/ui/Select'
import TextArea from '@/ui/TextArea'
import styles from '@/styles/components/CustomizeTwo.module.scss'

export default function CustomizeTwo({ setFormData }) {
  return (
    <>
      <div className={styles.container}>
        <h2>Back</h2>
        <div className={styles.grid}>
          <Select label="Font">
            <option>default</option>
            <option>other</option>
          </Select>
          <Select label="Font Size">
            <option>default</option>
            <option>other</option>
          </Select>
          <ColorPicker label="Font Color" containerStyle={{ marginTop: 24 }} />
          <ColorPicker
            label="Background Color"
            containerStyle={{ marginTop: 24 }}
          />
        </div>
        <TextArea
          containerStyle={{ marginTop: 24 }}
          label="Message"
          placeholder="Type here"
        />
      </div>
    </>
  )
}

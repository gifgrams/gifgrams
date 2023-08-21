import ColorPicker from '@/ui/ColorPicker'
import Select from '@/ui/Select'
import TextArea from '@/ui/TextArea'
import styles from '@/styles/components/CustomizeTwo.module.scss'

export default function CustomizeTwo({ formData, setFormData }) {
  return (
    <>
      <div className={styles.container}>
        <h2>Back</h2>
        <div className={styles.grid}>
          <Select
            label="Font"
            value={formData.typeface}
            onChange={(e) => {
              setFormData((prev) => {
                return { ...prev, typeface: e.target.value }
              })
            }}
          >
            <option>Open Sans</option>
            <option>Montserrat</option>
            <option>Poppins</option>
            <option>Comic Sans</option>
            <option>Press Start 2P</option>
            <option>Impact</option>
            <option>Pacifico</option>
            <option>Caveat</option>
            <option>Indie Flower</option>
            <option>Permanent Marker</option>
            <option>Corsiva</option>
            <option>Arial</option>
            <option>Bodini</option>
          </Select>
          <Select
            label="Font Size"
            selected={formData.fontSize}
            value={formData.fontSize}
            onChange={(e) => {
              setFormData((prev) => {
                return { ...prev, fontSize: e.target.value }
              })
            }}
          >
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </Select>
          <ColorPicker
            label="Font Color"
            containerStyle={{ marginTop: 24 }}
            value={formData.fontColor}
            onChange={(e) => {
              setFormData((prev) => {
                return { ...prev, fontColor: e.target.value }
              })
            }}
          />
          <ColorPicker
            label="Background Color"
            containerStyle={{ marginTop: 24 }}
            value={formData.backgroundColor}
            onChange={(e) => {
              setFormData((prev) => {
                return { ...prev, backgroundColor: e.target.value }
              })
            }}
          />
        </div>
        <TextArea
          containerStyle={{ marginTop: 24 }}
          label="Message"
          placeholder="Type here"
          value={formData.message}
          onChange={(e) => {
            setFormData((prev) => {
              return { ...prev, message: e.target.value }
            })
          }}
        />
      </div>
    </>
  )
}

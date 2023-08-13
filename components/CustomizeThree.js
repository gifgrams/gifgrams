import TextInput from '@/ui/TextInput'
import styles from '@/styles/components/CustomizeThree.module.scss'

export default function CustomizeThree({ formData, setFormData }) {
  return (
    <>
      <div className={styles.container}>
        <h2>Recipient</h2>
        <TextInput
          label="Title"
          placeholder="The email subject line"
          containerStyle={{ marginTop: 24 }}
          style={{ width: '100%' }}
          value={formData.title}
          onChange={(e) => {
            setFormData((prev) => {
              return { ...prev, title: e.target.value }
            })
          }}
        />
        <TextInput
          label="Recipient Name"
          placeholder="How you'd address them"
          containerStyle={{ marginTop: 24 }}
          style={{ width: '100%' }}
          value={formData.recipientName}
          onChange={(e) => {
            setFormData((prev) => {
              return { ...prev, recipientName: e.target.value }
            })
          }}
        />
        <TextInput
          label="Recipient Email"
          placeholder="Email"
          type="email"
          containerStyle={{ marginTop: 24 }}
          style={{ width: '100%' }}
          value={formData.recipientEmail}
          onChange={(e) => {
            setFormData((prev) => {
              return { ...prev, recipientEmail: e.target.value }
            })
          }}
        />
        <TextInput
          label="Schedule Send"
          type="date"
          containerStyle={{ marginTop: 24 }}
          style={{ width: '100%' }}
          value={formData.sendDate}
          onChange={(e) => {
            setFormData((prev) => {
              return { ...prev, sendDate: e.target.value }
            })
          }}
        />
      </div>
    </>
  )
}

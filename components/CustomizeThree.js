import TextInput from '@/ui/TextInput'
import styles from '@/styles/components/CustomizeThree.module.scss'

export default function CustomizeThree({ setFormData }) {
  return (
    <>
      <div className={styles.container}>
        <h2>Recipient</h2>
        <TextInput
          label="Title"
          placeholder="The email subject line"
          containerStyle={{ marginTop: 24 }}
          style={{ width: '100%' }}
        />
        <TextInput
          label="Recipient Name"
          placeholder="How you'd address them"
          containerStyle={{ marginTop: 24 }}
          style={{ width: '100%' }}
        />
        <TextInput
          label="Recipient Email"
          placeholder="Email"
          type="email"
          containerStyle={{ marginTop: 24 }}
          style={{ width: '100%' }}
        />
        <TextInput
          label="Schedule Send"
          type="date"
          containerStyle={{ marginTop: 24 }}
          style={{ width: '100%' }}
        />
      </div>
    </>
  )
}

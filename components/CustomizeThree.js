import RecipientsEditor from '@/components/RecipientsEditor';
import TextInput from '@/ui/TextInput';
import styles from '@/styles/components/CustomizeThree.module.scss';

export default function CustomizeThree({ formData, setFormData }) {
  return (
    <>
      <div className={styles.container}>
        <h2>Send</h2>
        <TextInput
          label='Title'
          placeholder='The email subject line'
          containerStyle={{ marginTop: 24 }}
          style={{ width: '100%' }}
          value={formData.title}
          onChange={(e) => {
            setFormData((prev) => {
              return { ...prev, title: e.target.value };
            });
          }}
        />
        <RecipientsEditor
          recipients={formData.recipients}
          setRecipients={setRecipients}
        />
      </div>
    </>
  );

  function setRecipients(recipients) {
    setFormData((prevFormData) => ({ ...prevFormData, recipients }));
  }
}

import TextInput from '@/ui/TextInput';
import styles from '@/styles/components/RecipientsEditor.module.scss';
import Button from '@/ui/Button';
import UserPlus from '@/public/icons/userPlus.svg';
import CloseSquare from '@/public/icons/closeSquare.svg';

const RecipientsEditor = ({ recipients, setRecipients }) => {
  return (
    <div className={styles.container}>
      <h3>Recipients</h3>
      {recipients.map(({ name, email, id }) => (
        <div className={styles.recipientRow} key={id}>
          <TextInput
            placeholder='Name'
            value={name}
            onChange={(e) => {
              setRecipientById(id, { id, name: e.target.value, email });
            }}
          />
          <TextInput
            placeholder='Email'
            value={email}
            onChange={(e) => {
              setRecipientById(id, { id, name, email: e.target.value });
            }}
          />
          <button onClick={() => deleteRecipient(id)}>
            <CloseSquare />
          </button>
        </div>
      ))}
      <Button onClick={addRecipient}>
        New Recipient
        <UserPlus />
      </Button>
    </div>
  );

  function addRecipient() {
    setRecipients([
      ...recipients,
      { name: '', email: '', id: crypto.randomUUID() },
    ]);
  }

  function deleteRecipient(id) {
    setRecipients(recipients.filter((recipient) => recipient.id !== id));
  }

  function setRecipientById(id, newRecipient) {
    setRecipients(
      recipients.map((recipient) =>
        recipient.id === id ? newRecipient : recipient
      )
    );
  }
};

export default RecipientsEditor;

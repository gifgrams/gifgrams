import CardContainer from '@/components/CardContainer'
import GifGramsTag from '@/components/GifGramsTag'

export default function Card({ cardId }) {
  return (
    <>
      <CardContainer
        cardData={{
          mediaUrl: '',
          accentColor: '#E0E0E0',
          typeface: 'Monserrat',
          fontSize: 'Medium',
          fontColor: '#000000',
          backgroundColor: '#FFFFFF',
          message:
            "Dear reader,\n\nThis is a message to inform you that your car's extended warranty is about to expire. We advise that you take action immediately. Please do not report us as spam, we are from ToyBota and are very legit real 100% service representitors.\n\nLove, Bob",
          title: '',
          recipientName: '',
          recipientEmail: '',
          sendDate: Date.now(),
        }}
      />
    </>
  )
}

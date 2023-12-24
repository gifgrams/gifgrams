import styleBuilder from '@/util/styleBuilder';
import Card from '@/components/Card';
import CardControls from '@/components/CardControls';
import GifGramsTag from '@/components/GifGramsTag';
import styles from '@/styles/components/CardContainer.module.scss';

export default function CardContainer({
  isPreview = false,
  isFront,
  setIsFront,
  history,
  containerStyle,
  showOnboarding,
  setShowOnboarding,
  cardData = {
    mediaUrl: '',
    accentColor: '#41C4E0',
    typeface: 'Monserrat',
    fontSize: 14,
    fontColor: '#000000',
    backgroundColor: '#ffffff',
    message: '',
    title: '',
    recipients: [],
    sendDate: Date.now(),
  },
  cardId = null,
}) {
  return (
    <div
      className={styleBuilder([
        styles.container,
        [styles.isPreview, isPreview],
      ])}
      style={{
        ...containerStyle,
        background: `radial-gradient(74.17% 74.17% at 50.00% 50.00%, rgba(255, 255, 255, 0.70) 0%, rgba(255, 255, 255, 0.25) 100%), ${cardData.accentColor}`,
      }}
    >
      <Card
        isPreview={isPreview}
        isFront={isFront}
        setIsFront={setIsFront}
        cardData={cardData}
        showOnboarding={showOnboarding}
        setShowOnboarding={setShowOnboarding}
      />
      {!isPreview && !history && (
        <CardControls isFront={isFront} cardId={cardId} />
      )}
      {!isPreview && <GifGramsTag accentColor={cardData.accentColor} />}
    </div>
  );
}

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import styleBuilder from '@/util/styleBuilder';
import emitToast from '@/ui/Toast';
import UndoLeftRoundSquare from '@/public/icons/UndoLeftRoundSquare.svg';
import styles from '@/styles/components/CardControls.module.scss';

const reactions = ['😁', '😂', '❤️', '🙏', '🥳'];

export default function CardControls({ isFront, cardId, senderId }) {
  const [reactionSent, setReactionSent] = useState(false);
  const router = useRouter();

  const supabase = createClientComponentClient();

  const sendEmojiReaction = (emoji) => {
    setReactionSent(true);
    fetch('/api/v1/respond/emoji', {
      method: 'POST',
      body: JSON.stringify({
        cardId,
        emoji,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        emitToast(
          `Your reaction was registered.`,
          `"${emoji}" was sent to the sender`,
          'success'
        );
      })
      .catch((error) => {
        emitToast(`An unexpected error occurred.`, `Try again.`, 'error');
      });
  };

  const handleSendResponse = async () => {
    const { data: sender, error } = await supabase
      .from('profile')
      .select()
      .eq('id', senderId)
      .single();
    if (error) return;
    router.push(`/new?name=${sender.full_name}&email=${sender.email}`);
  };

  return (
    <div
      className={styleBuilder([styles.container, [styles.isFront, isFront]])}
    >
      <button
        onClick={() => {
          handleSendResponse();
        }}
      >
        <UndoLeftRoundSquare />
        Send a free response!
      </button>
      <div className={styles.reactionContainer}>
        {reactions.map((elem, index) => (
          <button
            key={index}
            onClick={() => sendEmojiReaction(elem)}
            disabled={reactionSent}
          >
            {elem}
          </button>
        ))}
      </div>
    </div>
  );
}

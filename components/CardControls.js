"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styleBuilder from "@/util/styleBuilder";
import emitToast from "@/ui/Toast";
import UndoLeftRoundSquare from "@/public/icons/UndoLeftRoundSquare.svg";
import styles from "@/styles/components/CardControls.module.scss";

const reactions = ["😁", "😂", "❤️", "🙏", "🥳"];

export default function CardControls({ isFront, cardId }) {
  const [reactionSent, setReactionSent] = useState(false);
  const router = useRouter();

  const alertComingSoon = (feature) => {
    alert(`${feature} are coming soon! Hang tight :)`);
  };

  const sendEmojiReaction = (emoji) => {
    setReactionSent(true);
    fetch("/api/v1/respond/emoji", {
      method: "POST",
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
          "success"
        );
      })
      .catch((error) => {
        emitToast(`An unexpected error occurred.`, `Try again.`, "error");
      });
  };

  return (
    <div
      className={styleBuilder([styles.container, [styles.isFront, isFront]])}
    >
      <button onClick={() => router.push("/new")}>
        <UndoLeftRoundSquare />
        Send a free response
      </button>
      <div className={styles.reactionContainer}>
        {reactions.map((elem, index) => (
          <button
            key={index}
            onClick={() => sendEmojiReaction(elem)}
            disabled={reactionSent}
            // className={styleBuilder([styles.disabled, false])}
          >
            {elem}
          </button>
        ))}
      </div>
    </div>
  );
}

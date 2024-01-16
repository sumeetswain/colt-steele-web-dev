import { useState } from "react";
import { v4 as uuid } from "uuid";
export default function EmojiManager() {
  const emojiList = ["😭", "😈", "🤑", "😅", "😱", "😨", "😍"];
  const [emojis, setEmojis] = useState([{ id: uuid(), emoji: "😂" }]);
  const emojiPicker = () => {
    return emojiList[Math.floor(Math.random() * emojiList.length)];
  };
  const randomEmoji = emojiPicker();
  const addEmoji = () => {
    setEmojis((oldEmojis) => [
      ...oldEmojis,
      { id: uuid(), emoji: randomEmoji },
    ]);
    // same logic as in objects ,we are creating a array by spreading the original array and adding a fire emoji into that array
  };
  const deleteEmoji = (id) => {
    setEmojis((oldEmojis) => {
      return oldEmojis.filter((oldEmojis) => oldEmojis.id !== id);
    });
  };
  const heartMaker = () => {
    setEmojis((oldEmojis) => {
      return oldEmojis.map((e) => {
        return { ...e, emoji: "❤" };
      });
    });
  };
  return (
    <div>
      {emojis.map((emoji) => (
        <span
          onClick={() => deleteEmoji(emoji.id)}
          key={emoji.id}
          style={{ fontSize: "2rem" }}
        >
          {emoji.emoji}
        </span>
      ))}
      <br />
      <button onClick={addEmoji}>Add Emoji</button>
      <br />
      <button onClick={heartMaker}>Heart</button>
    </div>
  );
}

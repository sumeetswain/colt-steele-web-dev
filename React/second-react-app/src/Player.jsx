import { useState } from "react";

export default function Player({ winScore, playerNo }) {
  const [score, setScore] = useState(0);
  const incrementScore = () => {
    setScore((score) => score + 1);
  };

  return (
    <>
      <span>{score}</span>
      <button onClick={incrementScore}>+1</button>
    </>
  );
}

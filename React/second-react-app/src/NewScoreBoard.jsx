import { useState } from "react";
export default function NewScoreBoard({ winScore = 5, playerNo = 2 }) {
  const [scores, setScores] = useState(new Array(playerNo).fill(0));
  const incrementScore = (idx) => {
    setScores((prevScores) => {
      return prevScores.map((score, i) => {
        if (i == idx) return score + 1;
        return score;
      });
    });
  };
  const reset = () => {
    setScores(new Array(playerNo).fill(0));
  };
  return (
    <div>
      <h1>Score Board</h1>
      <ul>
        {scores.map((score, idx) => {
          return (
            <li key={idx}>
              Player {idx + 1}: {score}
              <button onClick={() => incrementScore(idx)}>+1</button>
              {score >= winScore && "Winner"}
            </li>
          );
        })}
      </ul>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

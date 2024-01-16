import { useState } from "react";
export default function ScoreKeeper() {
  const [scores, setScores] = useState({ p1score: 0, p2score: 0 });
  const incrementP1Score = () => {
    setScores((oldScores) => {
      //we pass the scores object to setScore
      return { ...oldScores, p1score: oldScores.p1score + 1 };
      // we create a new object, spread the scores object and update the p1 score and then return the object
    });
  };
  const incrementP2Score = () => {
    setScores((oldScores) => {
      return { ...oldScores, p2score: oldScores.p2score + 1 };
    });
  };
  return (
    <div>
      <p>Player 1 Score: {scores.p1score}</p>
      <p>Player 2 Score: {scores.p2score}</p>
      <button onClick={incrementP1Score}>+1 Player 1 </button>
      <button onClick={incrementP2Score}>+1 Player 2 </button>
    </div>
  );
}

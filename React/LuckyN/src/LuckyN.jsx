import { useState } from "react";
import Dice from "./Dice";
import Button from "./Button";
export default function LuckyN({ numDice = 2, winCheck }) {
  function d6() {
    return Math.floor(Math.random() * 6) + 1;
  }
  function getRolls(n) {
    return Array.from({ length: n }, () => d6());
  }

  const [dice, setDice] = useState(getRolls(numDice));
  const isWinner = winCheck(dice);
  const rollDice = () => {
    setDice(getRolls(numDice));
  };
  console.log(dice);
  return (
    <main className="LuckyN">
      <h1>LuckyN {isWinner && ": You Win!"}</h1>
      <Dice dice={dice} />
      {/* <button style={{ marginTop: "10px" }} onClick={rollDice}>
        Re-Roll Dice
      </button> */}
      <Button clickFunc={rollDice} />
      {/* here we are passing the rolldice function to the button and executing that function when the button is clicked */}
    </main>
  );
}

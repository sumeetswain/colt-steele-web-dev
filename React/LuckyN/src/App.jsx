import "./App.css";
import Die from "./Die";
import Dice from "./Dice";
import LuckyN from "./LuckyN";
// import { sum } from "./LuckyN";
function App() {
  function sum(nums) {
    return nums.reduce((a, b) => a + b, 0);
  }
  function lessThan4(dice) {
    return sum(dice) < 4;
  }
  function allSame(dice) {
    return dice.every((v) => v === dice[0]);
  }
  return (
    <>
      <LuckyN winCheck={lessThan4} />
      <LuckyN winCheck={allSame} />
    </>
  );
}

export default App;

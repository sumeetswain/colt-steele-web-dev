import { useState } from "react";
export default function Counter() {
  console.log("rendered");
  const [count, setCount] = useState(0);
  function addOne() {
    setCount((currentCount) => currentCount + 1);
  }
  function setToTen() {
    setCount(10); // react will re-render a component only if it's value is changed, otherwise it wont waste a render
  }
  function addThree() {
    setCount((currentCount) => currentCount + 1);
    setCount((currentCount) => currentCount + 1);
    setCount((currentCount) => currentCount + 1);
  }
  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={addOne}>+1</button>
      <button onClick={addThree}>+3</button>
      <button onClick={setToTen}>Set to 10</button>
    </div>
  );
}

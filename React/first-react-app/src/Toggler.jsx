import "./Toggler.css";
import { useState } from "react";
export default function Toggler() {
  const [isHappy, setIsHappy] = useState(true);
  let [count, setCount] = useState(0);
  const toggleIsHappy = () => setIsHappy(!isHappy);
  const increaseCount = () => {
    setCount((count += 1));
  };
  return (
    <>
      <p className="Toggler" onClick={toggleIsHappy}>
        {isHappy ? "😄" : "😭"}
      </p>
      <p>{count}</p>
      <button onClick={increaseCount}>+1</button>
    </>
  );
}

import { useEffect, useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  useEffect(function myEffect() {
    console.log("Effect called");
  });
  const increment = () => {
    setCount((c) => (c += 1));
  };
  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>+1</button>
    </div>
  );
}

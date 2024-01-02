import { useState } from "react";
export default function Counter() {
  let [num, setNum] = useState(0);
  const handleClick = () => {
    setNum(num + 1);
  };
  return (
    <div>
      <p>The count is : {num}</p>
      <button onClick={handleClick}>+1</button>
    </div>
  );
}

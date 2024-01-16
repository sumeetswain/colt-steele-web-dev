import Box from "./Box";
import "./BoxGrid.css";
import { useState } from "react";
export default function BoxGrid({ numBoxes }) {
  let [boxes, setBoxes] = useState(Array(numBoxes).fill(false));
  //   making an array of length numboxes and filling all the values with false
  const reset = () => {
    setBoxes(Array(numBoxes).fill(false));
    // this will make all the values in the array to false
  };
  const toggleBox = (idx) => {
    // we need the index of the box to change the state of that box
    setBoxes((oldBoxes) => {
      //  passing the boxes array
      return oldBoxes.map((value, i) => {
        if (i === idx) return !value;
        // returning an array where the value of the element at the given index has been changed
        else return value;
        //and rest of the elements are returned as it is
      });
    });
  };
  return (
    <>
      <div className="BoxGrid">
        {boxes.map((b, idx) => (
          <Box key={idx} isActive={b} toggleBox={() => toggleBox(idx)} />
        ))}
        <br />
      </div>
      <button onClick={reset}>Reset</button>
    </>
  );
}

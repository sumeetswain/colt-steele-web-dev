import { useState } from "react";
import "./ColorBox.css";
export default function ColorBox({ colors }) {
  function getRandomIndex(colors) {
    const index = Math.floor(Math.random() * colors.length); // making a random index
    return colors[index]; // returning the color at the random index
  }
  const [color, setColor] = useState(getRandomIndex(colors));
  const changeColor = () => {
    const randomColor = getRandomIndex(colors); // getting the color from the function by passing the colors array
    setColor(randomColor); // setting the color we got from the function
  };
  return (
    <div
      className="ColorBox"
      style={{ backgroundColor: color }}
      onClick={changeColor}
    ></div>
  );
}

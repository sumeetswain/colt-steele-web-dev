import "./Box.css";
import { useState } from "react";
export default function Box({ isActive, toggleBox }) {
  return (
    <div
      className="Box"
      onClick={toggleBox}
      style={{ backgroundColor: isActive ? "black" : "red" }}
    ></div>
  );
}

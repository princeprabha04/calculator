import React from "react";
import "../css/button.css";
const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

function Buttons() {
  return (
    <div>
      {btnValues?.map((item, index: number) => {
        return (
          <button className={item === "=" ? "equals" : ""} key={index}>
            {item}
          </button>
        );
      })}
    </div>
  );
}

export default Buttons;

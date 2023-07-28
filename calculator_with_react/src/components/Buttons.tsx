import React, { useContext } from "react";
import "../css/button.css";
import { calculatorContext } from "./Wraper";
const btnValues = [
  "C", "+/-", "%", "/",7, 8, 9, "*",4, 5, 6, "-",1, 2, 3, "+",0, ".", "="
  // [7, 8, 9, "X"],
  // [4, 5, 6, "-"],
  // [1, 2, 3, "+"],
  // [0, ".", "="],
];

function Buttons() {

  const context = useContext(calculatorContext)
  const {handleNumberClick,handleEqualClick,handleOperatorClick,handleClearValue} = context
  // const rows = [];
  // let rowItems = [];


  
  // for (let i = 0; i < btnValues.length; i++) {
  //   const item = btnValues[i];
  //   rowItems.push(
  //     <button className={item === "=" ? "equals" : ""} key={i}>
  //       {item}
  //     </button>
  //   );

  //   if ((i + 1) % 4 === 0 || i === btnValues.length - 1) {
  //     rows.push(<div key={i}>{rowItems}</div>);
  //     rowItems = [];
  //   }
  // }
  return (
    <div className="buttons">
    {btnValues.map((item, index) => (
      <button
        className={item === "=" ? "equals" : ""}
        key={index}
        onClick={() => {
          if (typeof item === "number" || item === ".") {
            handleNumberClick(item);
          } else if ( item === '='){
            handleEqualClick();
          }else if (item === 'C'){
            handleClearValue()
          }
          else{
            handleOperatorClick(item)
          }
        }}
      >
        {item}
      </button>
    ))}
  </div>
  );
}

export default Buttons;

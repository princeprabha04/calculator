import React, { Context, createContext, useState,useCallback } from "react";
import Screen from "./Screen";
import Buttons from "./Buttons";

export interface context {
  screenValue: number;
}
export const calculatorContext = createContext<context>({});

function Wraper() {
  const [value, setValue] = useState<string>("0");
  const [currentValue, setCurrentValue] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleNumberClick = useCallback((num:unknown)=>{
    console.log("num=>", num)
     if(value === '0' || currentValue === null){
       if (value === '0'){

         setValue(num.toString())
       }
      setCurrentValue(parseFloat(num as string))
     }else {
      console.log("else===========================>")
      setValue(value + num)
      setCurrentValue(parseFloat(value + num as string))
     }
    
  },[currentValue, value])
  console.log("currentValue",currentValue)

  const handleEqualClick = useCallback(()=>{
     if (operator !== null && currentValue !== null){
      switch (operator){
        case '+':
          setValue((prev)=>(parseFloat(prev)+currentValue).toString())
          break
        case "-":
          setValue((prev)=>(parseFloat(prev)-currentValue).toString())
          break
        case "*":
          setValue((prev)=>(parseFloat(prev) * currentValue).toString())
          break
        case "/":
          setValue((prev)=>(parseFloat(prev) / currentValue).toString())
          break
        default:
        break;
      }
      setCurrentValue(null)
      setOperator(null)
     }
  },[currentValue, operator])

  const handleOperatorClick = useCallback((opr)  => {
    console.log("opr",opr)
    if (currentValue !== null) {
      setOperator(opr)
      setCurrentValue(null)
    }

  },[currentValue])
  const handleClearValue = useCallback(()=> {
    console.log("handleClearValue")
    setValue("0")
    setCurrentValue(null)
    setOperator(null)
  },[])
  console.log("value",value)
  return (
    <calculatorContext.Provider
      value={{
        screenValue: value,
        operator:operator,
        handleNumberClick:handleNumberClick,
        handleEqualClick:handleEqualClick,
        handleClearValue:handleClearValue,
        handleOperatorClick:handleOperatorClick
      }}
    >
      <div style={{border:'red', background:'white', height:"fit-content"}}>
        <Screen />
        <Buttons/>
      </div>
    </calculatorContext.Provider>
  );
}

export default Wraper;

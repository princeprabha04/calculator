import React, { Context, createContext, useState } from "react";
import Screen from "./Screen";
import Buttons from "./Buttons";

export interface context {
  screenValue: number;
}
export const calculatorContext = createContext<context>({});

function Wraper() {
  const [value, setValue] = useState<number>(0);
  return (
    <calculatorContext.Provider
      value={{
        screenValue: value,
      }}
    >
      <div style={{border:'red', background:'red'}}>
        <Screen />
        <Buttons/>
      </div>
    </calculatorContext.Provider>
  );
}

export default Wraper;

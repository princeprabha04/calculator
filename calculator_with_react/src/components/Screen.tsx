import React, { useContext,useCallback } from 'react'
import { calculatorContext, context } from './Wraper'

function Screen() {
    const context = useContext<context>(calculatorContext)
    const {screenValue,operator}= context
    console.log("screenValue",screenValue)

    const renderInput = useCallback(
      () => {
       return (
        <input placeholder='enter number' value={screenValue}  style={{width:"90%", margin:'5px', height:'50px'}}/>
       )
      },
      [screenValue],
    )

    return (
    <div  style={{width:'100%', background:'green'}}>
        {screenValue}
        {operator}
    </div>
  )
}

export default Screen
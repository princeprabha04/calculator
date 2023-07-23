import React, { useContext } from 'react'
import { calculatorContext, context } from './Wraper'

function Screen() {
    const context = useContext<context>(calculatorContext)
    const {screenValue}= context

    return (
    <div>
        <input placeholder='enter number' value={screenValue}/>
    </div>
  )
}

export default Screen
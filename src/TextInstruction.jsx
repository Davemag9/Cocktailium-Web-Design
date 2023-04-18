import React from 'react'

export const TextInstruction = (props) => {
  return (
    <div className="instruction">
        <p className="text-ing" id="first">Instruction: </p>
        <p className="instr-text">{props.instruction}</p>
    </div>
  )
}

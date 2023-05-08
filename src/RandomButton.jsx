import React from 'react'

export const RandomButton = (props) => {


  return (
    <div className="center-rand-butt">
        <button className="rand-butt" onClick={props.getRandom}>Random cocktails!</button>
    </div>
  )
}

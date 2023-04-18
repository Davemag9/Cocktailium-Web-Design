import React from 'react'
import './style.css'

export const HeadText = (props) => {
  return (
    <div>
        <div class="text-1par">{props.text}</div>
        <div class="head-line"></div>
    </div>
  )
}

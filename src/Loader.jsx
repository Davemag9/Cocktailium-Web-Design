import React from 'react'


import nardi from './images/nardi.jpg'
import './Loader.css'


export const Loader = () => {
  return (
    <img data-testid = 'Loader' className='nardi' src={nardi}></img>
  )
}

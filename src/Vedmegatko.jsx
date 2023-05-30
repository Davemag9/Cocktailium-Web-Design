import React from 'react'
import './Vedmegatko.css'
import medved from './images/medved.jpg'

export const Vedmegatko = () => {
  return(
    <div>    
      <img data-testid = 'Vedmegatko' className='vedmedik' src={medved}></img>
    </div>
  )
}
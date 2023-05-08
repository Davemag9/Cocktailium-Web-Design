import React from 'react'
import { Link } from 'react-router-dom'

import './Gallery.css'

export const ToOfferButton = () => {
  return (
    <Link to="/post">
        <button className="add-post">Offer photo</button>
    </Link>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

import './Gallery.css'

export const ToOfferButton = () => {
  return (
    <Link data-testid = "ToOfferButton" to="/post">
        <button className="add-post">Offer photo</button>
    </Link>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

export const OfferButton = () => {
  return (
    <Link to="/main">
        <button className="submit">Offer</button>
    </Link>
  )
}

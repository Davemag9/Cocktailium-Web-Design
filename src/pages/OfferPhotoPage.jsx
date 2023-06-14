import React from 'react'

import { OfferForm } from '../OfferForm'
import { OfferButton } from '../OfferButton'
import { OfferPhotoInstructions } from '../OfferPhotoInstructions'

export const OfferPhotoPage = () => {
  return (
    <div>
        <OfferForm/>
        {/* <OfferButton/> */}
        <OfferPhotoInstructions/>
    </div>
  )
}

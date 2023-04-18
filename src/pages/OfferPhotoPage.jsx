import React from 'react'
import { Header } from '../Header'
import { OfferForm } from '../OfferForm'
import { OfferButton } from '../OfferButton'
import { OfferPhotoInstructions } from '../OfferPhotoInstructions'

export const OfferPhotoPage = () => {
  return (
    <div>
        {/* <Header/> */}
        <OfferForm/>
        <OfferButton/>
        <OfferPhotoInstructions/>
    </div>
  )
}

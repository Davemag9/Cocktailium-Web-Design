import React from 'react'
import { Header } from '../Header'
import { Cocktail } from '../Cocktail'

const cocktailId = "21345"

export const CocktailPage = () => {
  return (
    <div>
        {/* <Header/> */}
        <Cocktail id = {cocktailId}/>
    </div>
  )
}

import React from 'react'
import { CocktailCard } from './CocktailCard'

export const CardContainer = (props) => {
  return (
    <div className="first-par-cont">
        {props.cocktails.map(({idDrink, strDrink, strDrinkThumb, strAlcoholic, strInstructions}) => {
             return (
                <CocktailCard idDrink = {idDrink} strDrink = {strDrink} strDrinkThumb = {strDrinkThumb} 
                strAlcoholic = {strAlcoholic} strInstructions = {strInstructions}/>
             )
        })}
    </div>
  )
}

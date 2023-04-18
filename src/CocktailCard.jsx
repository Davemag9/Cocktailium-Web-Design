import React from 'react'

export const CocktailCard = (props) => {
  return (
    <a href='/cocktail?idDrink=$1' className="first-par">
            <img src={props.strDrinkThumb} className ="picture"/>
            <div className="cocktail-name">{props.strDrink}</div>
            <div className="line"></div>
            <div className="cocktail-info">{props.strAlcoholic}</div>
            <div className="cocktail-info-1"> {props.strInstructions}</div>
        </a>
  )
}

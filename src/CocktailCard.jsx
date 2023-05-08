import React from 'react'

export const CocktailCard = (props) => {
  let link = "/cocktail?idDrink=$" + props.idDrink;
  let instruction = props.strInstructions;
  if( instruction.length > 165){
    instruction = instruction.substring(0, 162);
    instruction += "...";
  }
  return (
    <a href={link} className="first-par">
            <img src={props.strDrinkThumb} className ="picture"/>
            <div className="cocktail-name">{props.strDrink}</div>
            <div className="line"></div>
            <div className="cocktail-info">{props.strAlcoholic}</div>
            <div className="cocktail-info-1"> {instruction}</div>
    </a>
  )
}

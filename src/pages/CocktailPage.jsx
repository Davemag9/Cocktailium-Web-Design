import React from 'react'
import { Cocktail } from '../Cocktail'

export const CocktailPage = () => {
  const  cocktailId  = window.location.href;
  let Id = "0";
  for(let i = cocktailId.length; i >= 0; i--){
    if(cocktailId[i] == '$'){
      Id = cocktailId.substring(i + 1, cocktailId.length);
      break;
    }
  }
  
  return (
    <div data-testid = 'CocktailPage'>
        <Cocktail data-testid = 'Cocktail1' id = {Id}/>
    </div>
  )
}

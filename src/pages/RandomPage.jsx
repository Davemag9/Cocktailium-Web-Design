import React, { useState }  from 'react'
import { Header } from '../Header'
import { HeadText } from '../HeadText'
import { CardContainer } from '../CardContainer'
import { RandomButton } from '../RandomButton'


const text = "Don`t know what you want? There is some cocktails to try!"


export const RandomPage = () => {
    const [cocktails, setCocktails] = useState([
        {
            idDrink : "21345",
            strDrink : "Whiskey Sour",
            strDrinkThumb : "https://www.thecocktaildb.com/images/media/drink/hbkfsh1589574990.jpg",
            strAlcoholic : "Alcoholic",
            strInstructions : "Shake with ice. Strain into chilled glass, garnish and serve. If served 'On the rocks', strain ingredients into old-fashioned glass filled with ice."
        },
        {
            idDrink : "21346",
            strDrink : "Dry Martini",
            strDrinkThumb : "https://www.thecocktaildb.com/images/media/drink/6ck9yi1589574317.jpg",
            strAlcoholic : "Alcoholic",
            strInstructions : "Pour all ingredients into mixing glass with ice cubes. Strain in chilled martini cocktail glass. Squeeze oil from lemon peel onto the drink, or garnish with olive."
        },
        {
            idDrink : "21347",
            strDrink : "Daiquiri",
            strDrinkThumb : "https://www.thecocktaildb.com/images/media/drink/mrz9091589574515.jpg",
            strAlcoholic : "Alcoholic",
            strInstructions : "Pour all ingredients into shaker with ice cubes. Shake well. Strain in chilled cocktail glass. "
        },
        {
            idDrink : "21348",
            strDrink : "Margarita",
            strDrinkThumb : "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
            strAlcoholic : "Alcoholic",
            strInstructions : "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber. "
        },
    ]);

  return (
    <div>
        {/* <Header/> */}
        <HeadText text = {text}/>
        <CardContainer cocktails = {cocktails}/>
        <RandomButton/>
    </div>
  )
}


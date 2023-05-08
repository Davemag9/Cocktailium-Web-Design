import React, { useState, useEffect } from 'react'
import axios from "axios";

import { IngredientsContainer } from './IngredientsContainer'
import { TextInstruction } from './TextInstruction';
import { VideoInstruction } from './VideoInstruction';
import { Loader } from './Loader';
import { Vedmegatko } from './Vedmegatko';
import { NoCocktail } from './NoCocktail';

import './style.css'
import './Cocktail.css'

export const Cocktail = (props) => {
  const [isOleh, setOleh] = useState(false);
  const [stillLoading, setLoading] = useState(true);
  const [cocktails, setCocktails] = useState([]);

  async function getCocktailByID() {

    try {
      const request = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${props.id}`);

      if (request.status === 200) setCocktails(request.data.drinks);
    }
    catch (error) {
      setOleh(true);
    }

    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }

  const Anatoliy = async () => {
    setLoading(true);
    await getCocktailByID();
  }

  useEffect(() => {
    Anatoliy();
  }, []);

  return (
    <div>
      {stillLoading ? <Loader /> : ((!isOleh ? (cocktails ?

        <div className="cocktail-page">
          <div className="left-bar">
            <img className="ct-img" src={cocktails[0]['strDrinkThumb']}></img>
            <p className="ct-name">{cocktails[0]['strDrink']}</p>
            <p className="ct-alc">{cocktails[0]['strAlcoholic']}</p>
          </div>

          <div className="right-bar">
            <p className="text-ing" id="zero">Ingredients:</p>
            <IngredientsContainer data={cocktails[0]} />
            <TextInstruction instruction={cocktails[0]['strInstructions']} />
            <VideoInstruction link={cocktails[0]['strVideo']} />
          </div>
        </div>

        : <NoCocktail />) : <Vedmegatko />))}

    </div>

  )
}
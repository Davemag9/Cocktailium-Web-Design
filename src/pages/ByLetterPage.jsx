import React, { useState, useEffect } from 'react'
import axios from "axios";

import { HeadText } from '../HeadText'
import { SelectLetter } from '../SelectLetter'
import { CardContainer } from '../CardContainer'
import { Vedmegatko } from '../Vedmegatko';
import { Loader } from '../Loader';


const text = "Looking for cocktail? Try to find it by latter!"


export const ByLetterPage = () => {

  const [stillLoading, setLoading] = useState(true);
  const [isOleh, setOleh] = useState(false);

  const [currentLetter, setCurrentLetter] = useState('A');
  const [cocktails, setCocktails] = useState([]);

  async function getCocktailByLetter() {

    try {
      const request = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${currentLetter}`);
      setCocktails(request.data.drinks);
    }
    catch (error) {
      setOleh(true);
    }
    setLoading(false)
  }

  const Anatoliy = async () => {
    setLoading(true);
    await getCocktailByLetter();
  }

  useEffect(() => {
    Anatoliy();
  }, [currentLetter]);

  return (
    <div>
      <HeadText text={text} />
      <SelectLetter setLetter={setCurrentLetter} />
      {stillLoading ? <Loader /> : (!isOleh ? (<CardContainer cocktails={cocktails}/>) : <Vedmegatko />)}
    </div>
  )
}
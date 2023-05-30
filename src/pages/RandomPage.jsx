import React, { useState, useEffect } from 'react'
import axios from "axios";

import { HeadText } from '../HeadText'
import { CardContainer } from '../CardContainer'
import { RandomButton } from '../RandomButton'
import { Vedmegatko } from '../Vedmegatko';
import { Loader } from '../Loader';
import { NoCocktail } from '../NoCocktail';


const text = "Don`t know what you want? There is some cocktails to try!"


export const RandomPage = () => {

    const [stillLoading, setLoading] = useState(true);
    const [isClicked, setClick] = useState(false);

    const [isOleh, setOleh] = useState(false);

    const [cocktails, setCocktails] = useState([]);
    const temporaryArray = [];

    const handleClick = () => {
        setClick(!isClicked);
    }

    async function getRandomCocktails() {
        for (let i = 0; i < 4; i += 1) {
            try {
                const request = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`);
                temporaryArray.push(request.data.drinks[0]);
            }
            catch (error) {
                setOleh(true);
            }
        
        }
        
        setTimeout(() => {
            setLoading(false);
        }, 1000);
        
    }

    useEffect(()=> {
        const otdaiSalo = async () => {
            setLoading(true);
            await getRandomCocktails();
    
            if (temporaryArray.length > 4) setCocktails([temporaryArray[4], temporaryArray[5], temporaryArray[6], temporaryArray[7]]);
            else setCocktails(temporaryArray);
        };
        otdaiSalo();
    }, [isClicked]);



    return (
        <div>
            <HeadText text={text} />
            {stillLoading ? <Loader /> : ((!isOleh ? (cocktails ? <CardContainer cocktails={cocktails} /> : <NoCocktail/>) : <Vedmegatko />))}
            <RandomButton getRandom={handleClick} />
        </div>
    )

}
import React, { useState, useEffect } from 'react'
import axios from "axios";

import { HeadText } from '../HeadText'
import { SearchBar } from '../SearchBar'
import { CardContainer } from '../CardContainer'
import { Vedmegatko } from '../Vedmegatko'
import { Loader } from '../Loader'
import { NoCocktail } from '../NoCocktail';


const text = "Know what you want? Find it by name!"


export const ByNamePage = () => {

    const [stillLoading, setLoading] = useState(true);
    const [isOleh, setOleh] = useState(false);

    const [searchText, setSearchText] = useState("margarita")
    const [cocktails, setCocktails] = useState([]);

    async function getCocktailByName() {

        try {
            const request = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`);

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
        await getCocktailByName();
    }

    useEffect(() => {
        Anatoliy();
    }, [searchText]);


    return (
        <div>
            <HeadText text={text} />
            <SearchBar setText={setSearchText} />
            {stillLoading ? <Loader /> : ((!isOleh ? (cocktails ? <CardContainer cocktails={cocktails} /> : <NoCocktail />) : <Vedmegatko />))}
        </div>
    )
}
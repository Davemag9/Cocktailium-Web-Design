import React, { useState, useEffect } from 'react'
import { UnoIngradiento } from './UnoIngradiento';


export const IngredientsContainer = (props) => {
    
    const [ingredients, setIngredient] = useState([]);

    useEffect(() => {
        setIngredient([]);
        for (let i = 1; i <= 15; i += 1) {
            let ingr = props.data[`strIngredient${i}`];
            if (!ingr) {
                
                break;
            }
            let measure = props.data[`strMeasure${i}`];
            setIngredient(current => [...current, 
                {
                "ingr" : ingr,
                "measure" : measure
                }
            ]);
            // console.log(ingredients.length);
        }
      },[props.data]
    );

    //const arr = ingredients.slice(0, (ingredients.length + 1) / 2);

    return(
        <div className="box-ing">
            {ingredients.map(({ingr, measure}) => {
                return (
                    <UnoIngradiento ingredient = {ingr} measure = {measure} />
                )
            })}
        </div>
    )
}

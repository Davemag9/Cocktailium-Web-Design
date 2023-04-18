import React from 'react'

export const UnoIngradiento = (props) => {
    // console.log(props.ingredient);
  return (
    <div className="ingradient">
        <div className="container-ing">
            <img className="img-ing" src={'https://www.thecocktaildb.com/images/ingredients/' +  props.ingredient + '-Small.png'}></img>
            <p className="dose-ing">{props.measure} {props.ingredient}</p>
        </div>
    </div>
  )
}

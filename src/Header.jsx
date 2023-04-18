import React from 'react'
import './style.css'
import logo from './images/logoC.png'
import dice from './images/dice.png'
import letter from './images/letter.png'

export const Header = () => {
  return (
    <header className="header">
      <a href="main" className="home-button">
        <img src={logo} alt='Logo' className="logo"></img>
        <div className="name111">
          <div className="name">
            <p>Cocktailium</p>
            <p>Cocktailium</p>
          </div>
        </div>
      </a>

      <div className="div-header">

        <a href="random" className="button">
          <img className="random" src={dice}/>
          <div className="button-1">Random cocktail</div>
        </a>

        <a href="byletter" className="button">
          <img className="random" src={letter}/>
          <div className="button-1">Cocktail by letter</div>
        </a>

        <a href="byname" className="button">
          <img className="random" src="https://images.vexels.com/media/users/3/156837/isolated/preview/0465da5149282f0843f7b7c3e2b004b2-alcohol-glass-icon-stroke.png"/>
          <div className="button-1">Cocktail by name</div>
        </a>

        <div class="button">
          <a href="gallery" className="button">
            <img className="random" src="https://cdn.iconscout.com/icon/free/png-256/whiskey-glass-486114.png"/>
            <div className="button-1">Our gallery</div>
          </a>
        </div>

      </div>
    </header>
  )
}



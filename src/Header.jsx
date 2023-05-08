import React, { useEffect } from 'react'
import './Header.css'
import logo from './images/logoC.png'
import dice from './images/dice.png'
import letter from './images/letter.png'
import { Link } from 'react-router-dom'

export const Header = () => {

  return (
    <header className="header">
      <Link className='button' to="main">
      <a className="home-button">
        <img src={logo} alt='Logo' className="logo"></img>
        <div className="name111">
          <div className="name">
            <p>Cocktailium</p>
            <p>Cocktailium</p>
          </div>
        </div>
      </a>
      </Link>

      <div className="div-header">
        <Link className='button' to="random">
        <a className="button">
          <img className="random" src={dice}/>
          <div className="button-1">Random cocktail</div>
        </a>
        </Link>
        <Link className='button' to="byletter">
        <a className="button">
          <img className="random" src={letter}/>
          <div className="button-1">Cocktail by letter</div>
        </a>
        </Link>
        <Link className='button' to="byname">
        <a className="button">
          <img className="random" src="https://images.vexels.com/media/users/3/156837/isolated/preview/0465da5149282f0843f7b7c3e2b004b2-alcohol-glass-icon-stroke.png"/>
          <div className="button-1">Cocktail by name</div>
        </a>
        </Link>

        <div class="button">
          <Link className='button' to="gallery">  
          <a className="button">
            <img className="random" src="https://cdn.iconscout.com/icon/free/png-256/whiskey-glass-486114.png"/>
            <div className="button-1">Our gallery</div>
          </a>
          </Link>
        </div>

      </div>
    </header>
  )
}



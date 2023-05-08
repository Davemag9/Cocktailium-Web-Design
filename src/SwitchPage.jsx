import React from 'react'
import { Link } from 'react-router-dom'

export const SwitchPage = () => {
  return (
    <div>
        <div class="buttons">
          {/* <Link to={`/byletter/${page}`} params={{page : page}}> */}
            <button class="button-arrow-l">
              <img class="arrow-pic" src="https://cdn.iconscout.com/icon/free/png-512/angle-left-b-1966289-1659461.png?f=avif&w=256"></img>
            </button>
          {/* </Link> */}
          
          {/* <Link to={`/byletter/${page}`} params={{page : page}}> */}
            <button  class="button-arrow-r">
              <img class="arrow-pic" src="https://cdn.iconscout.com/icon/free/png-512/right-arrow-1438234-1216195.png?f=avif&w=256"></img>
            </button>
          {/* </Link> */}
        </div>
    </div>
  )
}

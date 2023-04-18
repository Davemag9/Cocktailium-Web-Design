import React from 'react'

export const SearchBar = () => {
  return (
    <div className="search">
        <input className="search-field" type="text" placeholder="Search..."></input>
        <button className="search-button">
          <img className="loop-logo" src="https://icons.veryicon.com/png/128/miscellaneous/monochrome-linear-icon-2/search-952.png"></img>
        </button>
    </div>
  )
}

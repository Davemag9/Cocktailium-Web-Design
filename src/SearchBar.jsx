import React, { useState } from 'react'

export const SearchBar = (props) => {

  const [searchTexta, setSearchTexta] = useState("");

  const handleClick = () => {
    props.setText(searchTexta);
  }

  return (
    <div className="search">
        <input className="search-field" type="text" placeholder="Search..." onChange={(e => setSearchTexta(e.target.value))}></input>
        <button className="search-button" onClick={handleClick}>
          <img className="loop-logo" src="https://icons.veryicon.com/png/128/miscellaneous/monochrome-linear-icon-2/search-952.png"></img>
        </button>
    </div>
  )
}

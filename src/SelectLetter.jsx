import React from 'react'

export const SelectLetter = (props) => {
  const options = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T',  'V', 'W', 'Z' ];;

  const handleChange = (e) => {
    props.setLetter(e.target.value);
  }

  return (
    <div >
        <select data-testid = 'SelectLetter' className="list" onChange={handleChange}>
          {options.map((option) => (
            <option value={option}>{option}</option>
          ))}
          </select>
    </div>
  )
}

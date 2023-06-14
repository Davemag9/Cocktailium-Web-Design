import React from 'react'
import { Link } from 'react-router-dom'

export const OfferForm = () => {
  return (
    <div>
        <form className="upload-photo" action="/index3.html">
            <div className="post-info">
                <p>Instagram nickname:</p>
                <input required type="text" className="nickname"></input>
            </div>
            <div className="post-info">
                <p>Chose photo:</p>
                <input required type="file" id="myFile" name="filename" className="myFile"></input>
            </div>
            <div className="post-info">
                <p>
                    <input required type="checkbox" className="checkbox"></input>
                    I know that photo can be posted on Cocktailium
                </p>
            </div>
            <input data-testid = 'OfferButton' type="submit" className="submit" value="Offer"></input>
        </form>
    </div>
  )
}

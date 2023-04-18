import React from 'react'

export const OfferForm = () => {
  return (
    <div>
        <form className="upload-photo" action="/index3.html">
            <div className="post-info">
                <p>Instagram nickname:</p>
                <input type="text" className="nickname"></input>
            </div>
            <div className="post-info">
                <p>Chose photo:</p>
                <input type="file" id="myFile" name="filename" className="myFile"></input>
            </div>
            <div className="post-info">
                <p>
                    <input type="checkbox" className="checkbox"></input>
                    I know that photo can be posted on Cocktailium
                </p>
            </div>

        </form>
    </div>
  )
}

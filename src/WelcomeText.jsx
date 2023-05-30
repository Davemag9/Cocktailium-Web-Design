import React from 'react'

export const WelcomeText = () => {
  return (
    <div data-testid = "WelcomeText" className="main">
        <div className="main-info">
            <p className="welcome">Welcome to Cocktailium!</p>
            <div className="welcome-div">
                <p className="welcome-text">Welcome to our website, dedicated to providing you with an extensive collection of cocktail recipes. Whether you're a seasoned mixologist or a beginner looking to impress your guests, our site offers a wide variety of drinks to suit every taste and occasion.</p>
                <p className="welcome-text">Our carefully curated collection of cocktail recipes features everything from classic cocktails like the Martini and Old Fashioned, to modern twists on favorites like the Cosmopolitan and Margarita. Our site also offers a variety of non-alcoholic cocktails for those who prefer to skip the booze.</p>
                <p className="welcome-text">Each recipe on our site is accompanied by clear and concise instructions, ensuring that even novice mixologists can create delicious cocktails with ease. We also provide helpful tips and tricks for perfecting your technique and presentation, so you can impress your friends and family with your newfound cocktail-making skills.</p>
                <p className="welcome-text">Whether you're looking to experiment with new flavors, impress your guests at your next party, or simply enjoy a refreshing drink at home, our website has everything you need to become a cocktail connoisseur. So, grab your shaker and start exploring our collection of delicious cocktail recipes today!</p>
            </div>
        </div>
        <div className="main-info">
            <div className="welcome-div">
                <p className="welcome-text" id="one">To contact us you can use this info:</p>
                <br></br>
                <p className="welcome-text">Gmail: cocktailium@hmail.com</p>
                <p className="welcome-text">Instagram: @cocktailium</p>
                <p className="welcome-text">Facebook: cocktailium</p>
                <p className="welcome-text">Telegram @Cocktailium</p>
                <br></br>
            </div>
            <p className="welcome">Contact us!</p>
        </div>
    </div>
  )
}

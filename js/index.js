import {
    getRandomCocktails, getCocktail, getCocktailByID,
} from './request.js';

const generateButton = document.getElementsByClassName('rand-butt')[0];
const cardCocktail = document.getElementsByClassName('first-par-cont')[0];

const array = ['12670', '12654', '178331', '13395'];

const randomCocktail = async () => {
    for (let i = 0; i < 4; i += 1) {
        getRandomCocktails().then((data) => {
            array[i] = data.idDrink;
        });
    }
    cardCocktail.innerHTML = '';
    for (let i = 0; i < 4; i += 1) {
        getCocktailByID(array[i]).then((data) => {
            console.log(data.idDrink);
            cardCocktail.appendChild(getCocktail(
                data.idDrink,
                data.strDrink,
                data.strDrinkThumb,
                data.strAlcoholic,
                data.strInstructions,
            ));
        });
    }
};

generateButton.addEventListener('click', () => {
    randomCocktail();
    // ingredients.innerHTML = '';
});

document.addEventListener('DOMContentLoaded', () => {
    randomCocktail();
    // ingredients.innerHTML = '';
});

import {
    getCocktailByName, getCocktail,
} from './request.js';

const cocktailsDiv = document.getElementsByClassName('first-par-cont')[0];
const findButton = document.getElementsByClassName('search-button')[0];
const searchFieald = document.getElementsByClassName('search-field')[0];
const noCocktails = document.getElementsByClassName('no-cocktails')[0];

async function byNameList(name) {
    getCocktailByName(name).then((data) => {
        cocktailsDiv.innerHTML = '';
        console.log(data);

        if (name && data) {
            noCocktails.style = 'display: none';
            for (let i = 0; i < data.length; i += 1) {
                cocktailsDiv.appendChild(getCocktail(
                    data[i].idDrink,
                    data[i].strDrink,
                    data[i].strDrinkThumb,
                    data[i].strAlcoholic,
                    data[i].strInstructions,
                ));
            }
        } else {
            noCocktails.style = 'display: flex';
        }
    });
}

findButton.addEventListener('click', () => {
    const { value } = searchFieald;
    byNameList(value);
    searchFieald.value = '';
});

document.addEventListener('DOMContentLoaded', () => {
    byNameList('Mojito');
});

import {
    getCocktailByID, getCocktailByLetter, getCocktail,
} from './request.js';

let pageNow = 1;

const choseLetter = document.getElementsByClassName('list')[0];
const nextPage = document.getElementsByClassName('button-arrow-r')[0];
const prevPage = document.getElementsByClassName('button-arrow-l')[0];

const cocktailsDiv = document.getElementsByClassName('first-par-cont')[0];

const getLetter = () => {
    const choise = choseLetter.options[choseLetter.selectedIndex].text;
    return choise;
};

async function letterList(letter) {
    getCocktailByLetter(letter, pageNow).then((data) => {
        if (data !== 'ya_ne_loh') {
            cocktailsDiv.innerHTML = '';
            data = data.drinks;

            console.log(data);
            const array = [data[0].idDrink, data[1].idDrink,
                data[2].idDrink, data[3].idDrink];

            for (let i = 0; i < 4; i += 1) {
                getCocktailByID(array[i]).then((data1) => {
                    cocktailsDiv.appendChild(getCocktail(
                        data1.idDrink,
                        data1.strDrink,
                        data1.strDrinkThumb,
                        data1.strAlcoholic,
                        data1.strInstructions,
                    ));
                });
            }
        } else {
            pageNow -= 1;
        }
    });
}

prevPage.addEventListener('click', () => {
    if (pageNow !== 1) {
        pageNow -= 1;
        letterList(getLetter());
    }
});

nextPage.addEventListener('click', () => {
    pageNow += 1;
    letterList(getLetter());
});

choseLetter.addEventListener('change', () => {
    letterList(getLetter());
});

document.addEventListener('DOMContentLoaded', () => {
    pageNow = 1;
    letterList(getLetter());
});

import {
    getCocktailByID1, getIngredient,
} from './request.js';

const cocktailImg = document.getElementsByClassName('ct-img')[0];
const cocktailTitle = document.getElementsByClassName('ct-name')[0];
const cocktailAlcoholic = document.getElementsByClassName('ct-alc')[0];
const cocktailInstr = document.getElementsByClassName('instr-text')[0];
const ingredients = document.getElementsByClassName('box-ing')[0];
const videoTitle = document.getElementsByClassName('video-instr')[0];
const videoLink = document.getElementsByClassName('vlink')[0];

const loadFunc = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    if (!urlParams.has('idDrink')) {
        window.location.href = './index.html';
    }

    const id = urlParams.get('idDrink');

    await getCocktailByID1(id).then((data) => {
        console.log(data);
        if (!data.drinks) {
            window.location.href = '/mainindex.html';
        } else {
            data = data.drinks[0];

            cocktailImg.setAttribute('src', `${data.strDrinkThumb}`);
            cocktailTitle.innerHTML = `${data.strDrink}`;
            cocktailAlcoholic.innerHTML = `${data.strAlcoholic}`;
            cocktailInstr.innerHTML = `${data.strInstructions}`;

            for (let i = 1; i <= 15; i += 1) {
                const ingr = data[`strIngredient${i}`];
                if (!ingr) {
                    break;
                }
                const measure = data[`strMeasure${i}`];
                ingredients.appendChild(getIngredient(measure, ingr));
            }

            const link = data.strVideo;
            if (!link) {
                videoTitle.style = 'display: none';
            } else {
                console.log(link);
                videoLink.href = `${link}`;
            }
        }
    });
};

document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('preload');
    loadFunc();
});

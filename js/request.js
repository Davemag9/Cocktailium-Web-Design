const elemnum = 4;

const searchLetterURL = (letter) => `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`;
const searchNameURL = (name) => `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;
const searchIdURL = (id) => `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
const randomCocktail = () => 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
const ingradientImg = (ingr) => `https://www.thecocktaildb.com/images/ingredients/${ingr}-Small.png`;

const sendRequest = async (endpoint) => (await fetch(endpoint, { method: 'GET' })).json();

export const getRandomCocktails = async () => {
    const request = await sendRequest(randomCocktail()).then(
        (data) => data.drinks[0],
    );
    return request;
};

export const getCocktail = (id, name, img, alc, instruction) => {
    const cardStorage = document.createElement('a');
    cardStorage.classList.add('first-par');
    cardStorage.href = `/cocktailindex.html?idDrink=${id}`;
    cardStorage.style = 'text-decoration: none';

    if (instruction.length > 165) {
        instruction = instruction.substring(0, 162);
        instruction += '...';
    }

    cardStorage.innerHTML = `
            <img src="${img}" class ="picture"></img>
            <div class="cocktail-name">${name}</div>
            <div class="line"></div>
            <div class="cocktail-info">${alc}</div>
            <div class="cocktail-info-1">${instruction}</div>
    `;

    return cardStorage;
};

export const getIngredient = (measure, ingredient) => {
    const Ingr = document.createElement('div');
    Ingr.classList.add('ingradient');

    if (!measure) {
        measure = '';
    }

    Ingr.innerHTML = `
            <div class="container-ing">
                <img class="img-ing" src="${ingradientImg(ingredient)}"></img>
                <p class="dose-ing">${measure} ${ingredient}</p>
            </div>
    `;

    return Ingr;
};

export const getCocktailByID = async (id) => {
    const request = await sendRequest(searchIdURL(id)).then(
        (data) => {
            data = data.drinks[0];
            return data;
        },
    );
    return request;
};

export const getCocktailByID1 = async (id) => {
    const request = await sendRequest(searchIdURL(id)).then(
        (data) => data,

    );
    return request;
};

export const getCocktailByLetter = async (letter, page) => {
    const request = await sendRequest(searchLetterURL(letter)).then(
        (data) => {
            if (data.drinks.length >= page * elemnum) {
                data.drinks = data.drinks.slice((page - 1) * elemnum, page * elemnum);
                return data;
            }

            return 'ya_ne_loh';
        },
    );
    console.log(request);
    return request;
};

export const getCocktailByName = async (name) => {
    const request = await sendRequest(searchNameURL(name)).then(
        (data) => {
            data = data.drinks;
            return data;
        },
    );
    console.log(request);
    return request;
};

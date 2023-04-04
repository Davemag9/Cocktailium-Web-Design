const nickName = document.getElementsByClassName('nickname')[0];
const photo = document.getElementsByClassName('myFile')[0];
const checkbox = document.getElementsByClassName('checkbox')[0];
const submitButton = document.getElementsByClassName('submit')[0];

let check = false;
let itr = 0;

submitButton.addEventListener('click', () => {
    const valueNick = nickName.value;
    const file = photo.files[0];

    if (valueNick.lenght !== 0 && file && check) {
        console.log('ty ne loh');
        window.location.href = '/mainindex.html';
    } else {
        console.log('loh');
    }
});

checkbox.addEventListener('change', () => {
    if (itr === 0) {
        check = true;
        itr = 1;
    } else {
        check = false;
        itr = 0;
    }
});

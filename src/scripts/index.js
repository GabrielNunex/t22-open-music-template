import {applyInputRangeStyle} from './inputRange.js';
// import {albumList} from './albumsDatabase.js';
import {darkMode} from './theme.js';
import {newList} from './api.js';
const printList = await newList();
// console.log(printList);
// console.log(albumList);

function routine (){
    applyInputRangeStyle();
    upCards(printList);
    themeAnalisys();
}
routine ();

//Criação dos albums
function upCards(array) {
    const albumList = document.querySelector('.albums__options');

    for(let i = 0; i < array.length; i++){
        const albumItem = creatCard(array[i]);
        albumList.append(albumItem);
    }
}

function creatCard(array) {
const liAlbum = document.createElement('li');
const imgCapa = document.createElement('img');
const divInfo = document.createElement('div');
const titleAlbum = document.createElement('h3');
const divName = document.createElement('div');
const titleNome = document.createElement('h4');
const titleGenre = document.createElement('h4');
const divPrice = document.createElement('div');
const TitlePrice = document.createElement('h3');
const btnBuy = document.createElement('button');

divPrice.append(TitlePrice,btnBuy);
divName.append(titleNome,titleGenre);
divInfo.append(titleAlbum,divName,divPrice);
liAlbum.append(imgCapa,divInfo);

liAlbum.classList.add('albums__album');
imgCapa.src = array.img;
imgCapa.classList.add('album__img');
divInfo.classList.add('albums__text');
titleAlbum.classList.add('album__title');
titleAlbum.innerText = array.title;
divName.classList.add('album__info');
titleNome.classList.add('album__band');
titleNome.innerText = array.band;
titleGenre.classList.add('album__genre');
titleGenre.innerText = array.genre;
divPrice.classList.add('album__price');
TitlePrice.classList.add('album__value');
TitlePrice.innerText = array.price;
btnBuy.classList.add('album__btn');
btnBuy.innerText = 'Comprar';

return liAlbum;
};

//Filtro do preço
const price = document.querySelector('.value');
const priceRange = document.querySelector('.price__range');
const genre = document.querySelectorAll('.genre__option');
const albums = document.querySelectorAll('.albums__album');

function changePrice(value){
    price.innerHTML = value;
};

priceRange.addEventListener ("input", (event) => {
    const currentInputValue = event.target.value;
    changePrice(currentInputValue);
    
    for(let i = 0; i < albums.length; i++){
        const albumPrice = parseFloat(albums[i].querySelector('.album__value').textContent);
        console.log(currentInputValue);

        if (albumPrice > currentInputValue) {
            albums[i].classList.add('hidden')
        } else {
            albums[i].classList.remove('hidden')
        }
    }
});



//Estilização das abas de gênero
function retirar() {
    const genre2 = [...document.querySelectorAll('.genre__option')]
   
    genre2.map((element)=>{
    element.classList.remove('genre__option__hover');
    })
};
   
genre.forEach(element => {
    element.addEventListener("click", ()=> {
        retirar();
        element.classList.toggle('genre__option__hover');
    })
});


// DarkMode
const btn = document.querySelector('#btn-dm');

btn.addEventListener('click', () => {
    darkMode();
})

function themeAnalisys(){
    let dark = JSON.parse(localStorage.getItem("openMusic:theme"));
    console.log(dark);
    if (dark) {
        darkMode();
    }
}





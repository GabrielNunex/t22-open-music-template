let dark = false;

export function darkMode() {
    dark = !dark;
    console.log(dark + '?')
    localStorage.setItem("openMusic:theme", JSON.stringify(dark));
    const btn = document.querySelector('#btn-dm')

    const genre = document.querySelectorAll('.genre__option');
    const corpo = document.querySelector('body');
    const cabecalho = document.querySelector('.cabecalho');
    const genreTitle = document.querySelector('.genre__title');
    const genreOption = document.querySelectorAll('.genre__option');
    const price = document.querySelector('.price');
    const albums = document.querySelector('.albums');
    const albumsAlbum = document.querySelectorAll('.albums__album');
    const purple = document.querySelectorAll('.purple');
    const hover1 = document.querySelector('.genre__option__hover');
    const hover2 = document.querySelector('.genre__option__hover-dark');

    btn.classList.toggle('header__btn-dark');
    corpo.classList.toggle('dark-mode');
    cabecalho.classList.toggle('cabecalho-dark');
    genreTitle.classList.toggle('genre__title-dark');
    genreOption.forEach(function(element){
        element.classList.toggle('genre__option-dark')
    });
    price.classList.toggle('price-dark');
    albums.classList.toggle('albums-dark');
    albumsAlbum.forEach(function(element){
        element.classList.toggle('albums__album-dark')
    });
    purple.forEach(function(element){
        element.classList.toggle('purple-dark')
    });

    // hover1.classList.toggle('.genre__option__hover');
    // hover1.classList.toggle('.genre__option__hover-dark');


    if (!dark) {  
        function retirar() {
            const genre2 = [...document.querySelectorAll('.genre__option-dark')]
           
            genre2.map((element)=>{
            element.classList.remove('genre__option__hover-dark');
            })
        };
           
        genre.forEach(element => {
            element.addEventListener("click", ()=> {
                retirar();
                element.classList.toggle('genre__option__hover-dark');
            })
        });
    }
}


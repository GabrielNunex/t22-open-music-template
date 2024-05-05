const price = document.querySelector('.value');
const genre = document.querySelectorAll('.genre__option');

function changePrice(value){
 price.innerHTML = value;
};

function retirar() {
    const genre2 = [...document.querySelectorAll('.genre__option')]

    genre2.map((element)=>{
    element.classList.remove('hover');
    })
};

genre.forEach(element => {
    element.addEventListener("click", ()=> {
        retirar();
        element.classList.toggle('hover');
    })
});


export function applyInputRangeStyle() {
    const inputRange = document.querySelector(".price__range");
  
    inputRange.addEventListener("input", (event) => {
      const currentInputValue = event.target.value;
      const runnableTrackProgress = (currentInputValue / inputRange.max) * 100;
  
      inputRange.style.background = `linear-gradient(to right, var(--brand-1) ${runnableTrackProgress}%, var(--gray-5) ${runnableTrackProgress}%)`;
    });
}

// const price = document.querySelector('.value');


// export function changePrice(value){
//     price.innerHTML = value;
//    };
   
 
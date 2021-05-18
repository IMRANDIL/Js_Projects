const colors = ["green", "red", "rgba(133,122,200)", "#f15025", 'pink', 'cyan', 'black', 'yellow', 'white', 'firebrick'];

// select the element

const btn = document.querySelector('#btn');

let txt = document.querySelector('.color');
// event listener....now
btn.addEventListener('click', () =>{
   const random = Math.floor(Math.random()*colors.length);
   document.body.style.backgroundColor = colors[random];
   txt.textContent = colors[random];
})
// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay


// selecting the elements.....


const closebtn = document.querySelector('.close-btn');

const overlay = document.querySelector('.modal-overlay');

const openbtn = document.querySelector('.modal-btn');



// now the show starts....

openbtn.addEventListener('click', () =>{
    overlay.classList.add('open-modal');
})


closebtn.addEventListener('click', () =>{
    overlay.classList.remove('open-modal');
})
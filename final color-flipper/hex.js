const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// element selection....


const btn = document.querySelector('#btn');

let txt = document.querySelector('.color');

// event listener...now in action
btn.addEventListener('click', () =>{
    let randomcolor = '#';
    for(let i = 0; i < 6; i++){
        randomcolor += hex[Math.floor(Math.random()*hex.length)];
    }
    document.body.style.backgroundColor = randomcolor;
    txt.textContent = randomcolor;
})

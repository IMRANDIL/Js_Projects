// selecting the element...



let btns = document.querySelectorAll('.btn');
let val = document.querySelector('#value');



// looping and adding event listener...can also be done by array method forEach;

// third way without taking e as a parameter;

let count = 0;

btns.forEach((btn) =>{
    console.log(btn.classList);
    btn.addEventListener('click', () =>{
        if(btn.classList.contains('decrease')){
            count--;
        }
        else if(btn.classList.contains('increase')){
            count++;
        }
        else{
            count = 0;
        }
        val.textContent = count;
        if(count > 0){
            val.style.color = 'green';
        }
        else if(count < 0){
            val.style.color = 'firebrick';
        }
        else{
            val.style.color = 'black';
        }
    })

})




























// let count = 0;

// btns.forEach((btn) => {
//     btn.addEventListener('click', (e) => {
       
//        if(e.currentTarget.classList.contains('decrease')){
//            count--;
          
//        }
//        else if (e.currentTarget.classList.contains('increase')){
//            count++;
//        }
//        else{
//            count = 0;
//        }
//        val.textContent = count;
//        if(count > 0){
//            val.style.color = 'green';
//        }
//        else if(count<0){
//            val.style.color = 'firebrick';
//        }
//        else{
//            val.style.color = 'black';
//        }
//     })
    
// })






















// using for loop........





// let count = 0;

// for(let i = 0; i<btns.length; i++){
    
//  btns[i].addEventListener('click', function(e){
//    if(e.currentTarget.classList.contains('increase')){
//        count++;
//    }
//    else if(e.currentTarget.classList.contains('decrease')){
//        count--;
//    }
//    else{
//        count = 0;
//    }

//     val.textContent = count;
//     if(count > 0){
//         val.style.color = 'green';
//     }
//     else if(count<0){
//         val.style.color = 'firebrick';
//     }
//     else{
//         val.style.color = 'black';
//     }
//  })

// }


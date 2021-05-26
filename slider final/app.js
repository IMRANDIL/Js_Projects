// selecting the elements...


const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');




slides.forEach((slide, index) =>{
    slide.style.left = `${index*100}%`;
});




let count = 0;


nextBtn.addEventListener('click', () =>{
    count++;
    caraousel();
});



prevBtn.addEventListener('click', () =>{
    count--;
    caraousel();
});



function caraousel(){

// if(count > slides.length){
//     count = 0;
// }
// if(count < 0){
//     count = slides.length -1;
// }
// butoons...
if(count < slides.length -1){
    nextBtn.style.display = 'block';
}
else{
    nextBtn.style.display = 'none';
}




if(count > 0){
    prevBtn.style.display = 'block';
}
else{
    prevBtn.style.display = 'none';
}




    slides.forEach((slide) =>{
        slide.style.transform =`translateX(-${count *100}% )`
    });
}


prevBtn.style.display = 'none';
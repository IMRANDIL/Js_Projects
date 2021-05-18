// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class



const links = document.querySelector('.links');
const btntoggle = document.querySelector('.nav-toggle');


// Best way to do it....just toggle the class...



btntoggle.addEventListener('click', () =>{
    links.classList.toggle('show-links');
})




// The other way.....
// btntoggle.addEventListener('click', () =>{
//     if(links.classList.contains('show-links')){
//         links.classList.remove('show-links');
//     }
//     else{
//         links.classList.add('show-links');
//     }
// })






// btntoggle.addEventListener('click', () =>{
//     if(links.classList.contains('show-links')){
//         links.classList.remove('show-links');
//     }
//     else{
//         links.classList.add('show-links');
//     }
// })


// select the elements.....

const togglebtn = document.querySelector('.sidebar-toggle');
const closebtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');


// now action starts...best way to  do it ....can also be done using classlist.contains;

togglebtn.addEventListener('click', () =>{
   sidebar.classList.toggle('show-sidebar'); 
})



closebtn.addEventListener('click', () =>{
    sidebar.classList.remove('show-sidebar');
})
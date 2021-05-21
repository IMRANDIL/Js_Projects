
// selecting the elements......


const tabBtns = document.querySelectorAll('.tab-btn');

const contents = document.querySelectorAll('.content');

const about = document.querySelector('.about');

// adding eventlistener ...action now...

about.addEventListener('click', (e) =>{
   
    const datatarget = e.target.dataset.id;
   if(datatarget){
       tabBtns.forEach((btn) =>{
           btn.classList.remove('active')
       })
       e.target.classList.add('active')
       contents.forEach((content) =>{
           content.classList.remove('active');
       })
       const element = document.getElementById(datatarget);
       element.classList.add('active')
   }
})
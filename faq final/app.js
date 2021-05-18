//using selectors inside the element....niceone..


const questions = document.querySelectorAll('.question');

// action starts now.......

questions.forEach((question)=>{
    const  btns = question.querySelector('.question-btn');
    btns.addEventListener('click', () =>{
        questions.forEach((qst) =>{
            if(qst !== question){
                qst.classList.remove('show-text')
            }
        })
        question.classList.toggle('show-text')
    })
})







//selecting all the buttons...

// traversing the dom...way...
// const btns = document.querySelectorAll('.question-btn');


// now action starts...done..


// btns.forEach((btn) => {
//     btn.addEventListener('click', (e) => {

//         const par = e.currentTarget.parentElement.parentElement;
//      btns.forEach((bt) =>{
//         if(bt !== btn){
//             bt.parentElement.parentElement.classList.remove('show-text')
//         }
//      })
//         par.classList.toggle('show-text');

//     })
// })
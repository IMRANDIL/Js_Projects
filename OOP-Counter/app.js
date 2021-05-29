



// Using constructor function...................








// function selection(selection){
//     const selector = document.querySelector(selection);
//     if(selector){
//         return selector;
//     }
//     throw new Error(`No such '${selection}' exists!`)
// }


// function Counter(element, value){
// this.counter = element;
// this.value = value;
// this.valueDOM = element.querySelector('.value');
// this.valueDOM.textContent = this.value;
// this.increaseBtn = element.querySelector('.increase');
// this.decreaseBtn = element.querySelector('.decrease');
// this.resetBtn = element.querySelector('.reset');

// // binding reference...

// this.increase = this.increase.bind(this);
// this.decrease = this.decrease.bind(this);
// this.reset = this.reset.bind(this);

// this.increaseBtn.addEventListener('click', this.increase);
// this.decreaseBtn.addEventListener('click', this.decrease);
// this.resetBtn.addEventListener('click', this.reset);

// }



// Counter.prototype.increase = function(){
// this.value++;
// this.valueDOM.textContent = this.value;

// }




// Counter.prototype.decrease = function(){
//     this.value--;
//     this.valueDOM.textContent = this.value;
//     }

    

//     Counter.prototype.reset = function(){
//         this.value = 0;
//         this.valueDOM.textContent = this.value;
//         }



        
        


// const counterOne = new Counter(selection('.first-counter'),100);
// const counterTwo = new Counter(selection('.second-counter'),200);



















// Using Es6 class constructor....


function selection(selection){
    const selector = document.querySelector(selection);
    if(selector){
        return selector;
    }
    throw new Error(`No such '${selection}' exists!`)
}





class Counter {
    constructor(element, value){
        this.counter = element;
        this.value = value;
        this.valueDOM = element.querySelector('.value');
        this.valueDOM.textContent = this.value;
        this.increaseBtn = element.querySelector('.increase');
        this.decreaseBtn = element.querySelector('.decrease');
        this.resetBtn = element.querySelector('.reset');
        
        // binding reference...
        
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
        this.reset = this.reset.bind(this);
        
        this.increaseBtn.addEventListener('click', this.increase);
        this.decreaseBtn.addEventListener('click', this.decrease);
        this.resetBtn.addEventListener('click', this.reset); 
    }

    increase(){
        this.value++;
this.valueDOM.textContent = this.value;

    }

    decrease(){
        this.value--;
        this.valueDOM.textContent = this.value;
    }

    reset(){
        this.value = 0;
        this.valueDOM.textContent = this.value;
    }
}




const counterOne = new Counter(selection('.first-counter'),100);
const counterTwo = new Counter(selection('.second-counter'),200);

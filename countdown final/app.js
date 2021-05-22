const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];


// selecting the elements...

const giveaway = document.querySelector('.giveaway');

const deadline = document.querySelectorAll('.deadline-format h4');


const deadlineresult = document.querySelector('.deadline');

let tempDate = new Date();

let tempyear = tempDate.getFullYear();

let tempMonth = tempDate.getMonth();

let tempdate = tempDate.getDate();


const futureDate = new Date(tempyear, tempMonth, tempdate + 10, 10, 30, 0);

const year = futureDate.getFullYear();

let month = months[futureDate.getMonth()];


let date = futureDate.getDate();


let weekday = weekdays[futureDate.getDay()];



let time = futureDate.getHours();



giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year}, ${time}am`;


const futuretime = futureDate.getTime();


function Remainingtime(){
  const today = new Date().getTime();

  const t = futuretime - today;

  // 1 second = 1000 ms;
  // 1 minuute = 60 * 1000 ms;

// 1 hour = 60 * 60 * 1000 ms;

// 1 day = 24 * 60 * 60 * 1000 ms;

const oneday = 24 * 60 * 60 * 1000;

const onehour = 60 * 60 * 1000;

const oneminute = 60 * 1000;


let days = t / oneday;

days = Math.floor(days);

let hours = Math.floor((t % oneday)/ onehour);

let minutes = Math.floor((t % onehour)/ oneminute);


let seconds = Math.floor((t % oneminute)/ 1000);


// storing the values...

const values = [days, hours, minutes, seconds];

function format(formt){
   if(formt < 10){
     return `0${formt}`;
   }
   else{
     return  formt;
   }

}




if(t < 0){
  clearInterval(countdown);
  deadlineresult.innerHTML = `<h3 class='expired'>Sorry, this giveaway has expired!</h3>`;
}


deadline.forEach((item, index) =>{
 item.innerHTML = format(values[index]);
})

  
}



const countdown = setInterval(Remainingtime, 1000);



Remainingtime();
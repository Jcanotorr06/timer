const monthsEl = document.getElementById('months');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const messageEl = document.getElementById('message');

const newYears = '1 Jan 2021';
function countdown(){
    var newYearsDate = new Date(newYears);
    var currentDate = new Date();
    var currentYear = 2020;
    if(currentDate > newYearsDate){
      currentYear = currentYear+1
      newYearsDate.setFullYear(currentYear);
    }
    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const months = Math.floor(totalSeconds / 3600 / 24 / 30.417);
    const days = Math.floor((totalSeconds / 3600 / 24) % 30.417);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    monthsEl.innerHTML = months;
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);

    if(newYearsDate.getFullYear() == currentDate.getFullYear()){
      if(newYearsDate.getMonth() == currentDate.getMonth()){
        if(newYearsDate.getDate() == currentDate.getDate()){
          monthsEl.innerHTML = '0'
          daysEl.innerHTML = '0'
          hoursEl.innerHTML = '0'
          minutesEl.innerHTML = '0'
          secondsEl.innerHTML = '0'
          messageEl.innerHTML = 'Happy New Years'
        }
      }
    }

}


function formatTime(time){
  return time < 10 ? (`0${time}`) : time;
}


countdown();

setInterval(countdown, 1000);

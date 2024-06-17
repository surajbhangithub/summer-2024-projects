

console.log('Hi from 01-new_year_time_counter');

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const newYear = '1 Jan 2025';

function countdown (){

  const newYaerDate = new Date(newYear);

  const curruntDate = new Date ();

  const timeRemaining = newYaerDate -curruntDate;

  const totalSecondsRemaining = timeRemaining/1000;

  const days = Math.floor((totalSecondsRemaining) / (60*60*24));
  const hours = Math.floor(totalSecondsRemaining/(3600)) % 24;
  const mins = Math.floor((totalSecondsRemaining/(60)) % 60);
  const seconds = Math.floor(totalSecondsRemaining % 60);

  console.log(days, hours, mins, seconds);

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);

}

function formatTime (time) {
  return time < 10 ? (`0${time}`) : time;
}


countdown();

setInterval(countdown, 1000);
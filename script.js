document.addEventListener('DOMContentLoaded', () =>  {
    const newYear = new Date('jan 1 2024 00:00:00');
   
    const daysVal = document.querySelector('.time-count_days .time-count_val');
    const hoursVal = document.querySelector('.time-count_hours .time-count_val');
    const minutesVal = document.querySelector('.time-count_minutes .time-count_val');
    const secondsVal = document.querySelector('.time-count_seconds .time-count_val');

    const daysText = document.querySelector('.time-count_days .time-count_text');
    const hoursText = document.querySelector('.time-count_hours .time-count_text');
    const minutesText = document.querySelector('.time-count_minutes .time-count_text');
    const secondsText = document.querySelector('.time-count_seconds .time-count_text');

    function declOfNum(number, titles) {  
        let cases = [2, 0, 1, 1, 1, 2];  
        return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
    }

const timeCount = () => {
    let now = new Date();
    let leftUntil = newYear - now;

    let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
    let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(leftUntil / 1000 / 60) % 60;
    let seconds = Math.floor(leftUntil / 1000) % 60;

    daysVal.textContent = days;
    hoursVal.textContent = hours;
    minutesVal.textContent = minutes;
    secondsVal.textContent = seconds;

    daysText.textContent = declOfNum(days, ['день', 'дня', 'дней']);
    hoursText.textContent = declOfNum(hours, ['час', 'часа', 'часов']);
    minutesText.textContent = declOfNum(minutes, ['минута', 'минуты', 'минут']);
    secondsText.textContent = declOfNum(seconds, ['секунда', 'секунды', 'секунд']);
};
    
    timeCount()
    setInterval(timeCount, 1000);
});

// конечная дата 28.01.22 12.00
//const deadline = (function(y, m, d, h) { return new Date(y, m-1, d, h); })(2022, 01, 28, 12);


/* document.querySelector('.play').addEventListener('click', () => {
    document.querySelector('audio').play()
  })

  document.querySelector('.pause').addEventListener('click', () => {
    document.querySelector('audio').pause() 
  })*/


 const button = document.querySelector('.play');
 const audio = document.querySelector('audio');

 button.addEventListener('click', function(){
    if(audio.paused) {
        audio.play();
        button.classList.toggle('play')
      } else {
        audio.pause();
        button.classList.toggle('play')
      }
 })
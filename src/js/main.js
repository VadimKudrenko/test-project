$(document).ready(function(){

  $('.home__slider').slick({
    arrows: false,
    dots: true,
    dotsClass: 'home__slider-dotsClass',
    autoplay: true,
    autoplaySpeed: 2000
  });
  




// таймер 
  const MIN_IN_MS = 60000;
  const SEC_IN_MS = 1000;
  
  const time = MIN_IN_MS * 15 + SEC_IN_MS * 30// количество времени которое должен посчитать таймер
  const finishTime = new Date().getTime() + time;

  function convertMsToTime(ms) {
    const minutes = Math.floor((ms / MIN_IN_MS));
    const seconds = ((ms % MIN_IN_MS) / SEC_IN_MS).toFixed();
    console.log(minutes);
    console.log(seconds);

    return {
      minutes,
      seconds
    }
  }

  let timerId = setInterval(() => {
    const currentTime = new Date().getTime();
    const timeInMS = finishTime - currentTime;
    const convertedTime = convertMsToTime(timeInMS);

    document.getElementById('footer__timer-minutes').innerHTML = convertedTime.minutes;
    document.getElementById('footer__timer-seconds').innerHTML = convertedTime.seconds;

    if(finishTime <= 0){
      setTimeout(() => { clearInterval(timerId) });
    }
  }, 1000);


});
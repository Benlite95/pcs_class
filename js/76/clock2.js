(function () {
  'use strict';
  const clockElem = document.createElement('div');
  document.body.appendChild(clockElem);
  clockElem.className = 'clock';

  /*let seconds = 0;
  let minutes = 50;
  let hours = 23;*/
  let ticks = 86350;

  function padLeft(v, length, padding) {
    let p = v.toString();
    while(p.length < length) {
      p = `${padding}${p}`;
    }
    return p;
  }

  /*function ensureTwoDigits(n) {
    // return n.toString().padStart(2, '0');

    return n < 10 ? `0${n}` : n;
  }*/

  function updateClock() {
    /*seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;

      if (minutes === 60) {
        minutes = 0;
        hours++;

        if (hours === 24) {
          hours = 0;
        }
      }
    }*/

    ticks++;
    let seconds = ticks % 60;
    let minutes = Math.floor((ticks / 60)) % 60;
    let hours = Math.floor((((ticks / 60) / 60)) % 60) % 24;

    //clockElem.innerText = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0') }`;

    //clockElem.innerText = `${ensureTwoDigits(hours)}:${ensureTwoDigits(minutes)}:${ensureTwoDigits(seconds)}`;

    clockElem.innerText = `${padLeft(hours, 2, '0')}:${padLeft(minutes, 2, '0')}:${padLeft(seconds, 2, '0')}`;
  }

  setInterval(updateClock, 1);
  updateClock();
}());

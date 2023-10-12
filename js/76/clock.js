(function () {
  'use strict';
  const clockElem = document.createElement('div');
  document.body.appendChild(clockElem);

  /*clockElem.style.border = '1px solid black';
  clockElem.style.display = 'inline-block';
  clockElem.style.padding = '1em';
  clockElem.style.fontSize = '2em';
  clockElem.style.color = 'red';
  clockElem.style.backgroundColor = 'black';*/
  clockElem.className = 'clock';

  function updateClock() {
    clockElem.innerText = new Date().toLocaleTimeString();
  }

  setInterval(updateClock, 5000);
  updateClock();
}());

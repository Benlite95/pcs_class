window.clock = (function () {
  'use strict';

  return function createClock(parent = document.body) {
    const clockElem = document.createElement('div');
    parent.appendChild(clockElem);
    clockElem.className = 'clock';

    function updateClock() {
      clockElem.innerText = new Date().toLocaleTimeString();
    }

    setInterval(updateClock, 5000);
    updateClock();
  };
}());

/*
window.clock = function createClock(parent = document.body) {
  'use strict';

  // parent = parent || document.body;

  const clockElem = document.createElement('div');
  parent.appendChild(clockElem);
  clockElem.className = 'clock';

  function updateClock() {
    clockElem.innerText = new Date().toLocaleTimeString();
  }

  setInterval(updateClock, 5000);
  updateClock();
};*/

(function () {
  'use strict';

  const theButton = document.querySelector('#theButton');
  /*theButton.style.backgroundColor = 'black';
  theButton.style.color = 'white';
  theButton.style.fontWeight = 'bold';
  theButton.style.fontSize = '1.5em';
  theButton.style.padding = '1em';*/
  theButton.className = 'btn';
  theButton.style.top = 0;
  theButton.style.position = 'absolute';

  /*for(let i = 0; i < 250; i++) {
    console.log(theButton.style.top);
    theButton.style.top = `${parseInt(theButton.style.top) + 1}px`;
  }*/

  function moveIt() {
    theButton.style.top = `${parseInt(theButton.style.top) + 10}px`;

    //setTimeout(moveIt, 1000);
  }

  //setTimeout(moveIt, 1000);
  //setInterval(moveIt, 1000);

  const startButton = document.querySelector('#start');

  console.log(this);

  let interval;
  startButton.addEventListener('click', e => {
  //startButton.addEventListener('click', function () {
    console.log('clicked', interval, e);
    if (!interval) {
      interval = setInterval(moveIt, 100);
      e.target.innerText = 'stop';
      //startButton.innerText = 'stop';
      //this.innerText = 'stop';
    } else {
      clearInterval(interval);
      interval = null;
      e.target.innerText = 'start';
      //startButton.innerText = 'start';
      //this.innerText = 'start';
    }
  });
}());

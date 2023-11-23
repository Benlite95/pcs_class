(function () {
  'use strict';

  const canvas = document.querySelector('#theCanvas');
  const context = canvas.getContext('2d');

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  //const img = document.querySelector('img');
  const img = document.createElement('img');
  img.src = '3.png';
  /*setTimeout(() => {
    context.drawImage(img, 0, 0);
  }, 1000);*/
  img.onload = () => {
    context.drawImage(img, 0, 0);
  };
  img.onerror = () => {
    console.error('img failed to load');
  };
}());

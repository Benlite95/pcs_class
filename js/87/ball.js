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

  const RADIUS = 20;
  let x = RADIUS;
  let y = RADIUS;
  let dx = .5;
  let dy = 1;
  function drawBall() {
    //context.clearRect(0, 0, 1000, 500);
    context.beginPath();
    context.fillStyle = 'green';
    context.arc(x, y, RADIUS, 0, Math.PI * 2);
    context.fill();

    x += dx;
    y += dy;

    if (x < RADIUS || x > window.innerWidth - RADIUS) {
      dx = -dx;
    }

    if (y < RADIUS || y > window.innerHeight - RADIUS) {
      dy = -dy;
    }
  }

  setInterval(drawBall, 1);
}());

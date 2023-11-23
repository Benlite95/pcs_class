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

  class Ball {
    constructor(color, radius) {
      this.color = color;
      this.radius = radius;
      this.x = radius;
      this.y = radius;
      this.dx = 1;
      this.dy = 2.5;
      this.minY = radius;
    }

    draw() {
      context.beginPath();
      context.fillStyle = this.color;
      context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      context.fill();

      return this;
    }

    move(timeDelta) {
      //this.x += this.dx;
      //this.y += this.dy;
      this.x += (this.dx * (timeDelta * 0.5));
      this.y += (this.dy * (timeDelta * 0.5));

      if (this.x < this.radius || this.x > window.innerWidth - this.radius) {
        this.dx = -this.dx;
      }

      if (this.y < this.minY || this.y > window.innerHeight - this.radius) {
        this.dy = -this.dy;
      }

      // gravity
      /*this.dx -= this.dx * .001;
      this.dy -= this.dy * .001;
      const newMinY = this.minY * .001;
      if (newMinY < this.y) {
        this.minY = newMinY;
      }*/

      return this;
    }
  }

  // const theBall = new Ball('red', 50);
  const theBalls = [new Ball('red', 50)];

  let lastTimestamp = 0;
  function drawBalls(timestamp) {
    //console.log(timestamp - lastTimestamp, timestamp, performance.now());


    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    //theBall.move()
    //.draw();
    theBalls.forEach(b => b.move(timestamp - lastTimestamp).draw());

    lastTimestamp = timestamp;

    requestAnimationFrame(drawBalls);
  }

  //setInterval(drawBalls, 16.66);
  requestAnimationFrame(drawBalls);

  const colorInput = document.querySelector('#color');
  const radiusInput = document.querySelector('#radius');
  document.querySelector('#addBallForm').addEventListener('submit', e => {
    e.preventDefault();
    const newBall = new Ball(colorInput.value, +radiusInput.value);
    theBalls.push(newBall);
  });
}());

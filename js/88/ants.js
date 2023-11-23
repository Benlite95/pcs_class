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

  class Ant {
    constructor() {
      this.x = window.innerWidth / 2;
      this.y = window.innerHeight / 2;
    }

    draw() {
      context.fillRect(this.x, this.y, 3, 5);
    }

    move() {
      this.x += Ant.#getRandomNumber(-1, 1);
      this.y += Ant.#getRandomNumber(-1, 1);
      this.draw();
    }

    static #getRandomNumber(min, max) {
      return Math.floor(Math.random() * ((max - min) + 1)) + min;
    }
  }

  const ants = [];
  for(let i = 0; i < 3000; i++) {
    ants.push(new Ant());
  }

  setInterval(() => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    ants.forEach(a => a.move());
  }, 100);
}());

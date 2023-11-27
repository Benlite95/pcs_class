(async function () {
  'use strict';

  const SNAKE_SIZE = 64;
  const canvas = document.querySelector('#theCanvas');
  const context = canvas.getContext('2d');
  const crashSound = document.querySelector('#crash');
  const crunchSound = document.querySelector('#crunch');

  function resizeCanvas() {
    canvas.width = (window.innerWidth - 2) - ((window.innerWidth - 2) % SNAKE_SIZE);
    canvas.height = (window.innerHeight - 2) - ((window.innerHeight - 2) % SNAKE_SIZE);
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  let score = 0;
  let speed = 200;
  class Snake {
    constructor() {
      this.x = -SNAKE_SIZE;
      this.y = 0;
    }

    move() {
      let tempX = this.x;
      let tempY = this.y;
      switch (direction) {
        case 'ArrowUp':
          tempY -= SNAKE_SIZE;
          break;
        case 'ArrowRight':
          tempX += SNAKE_SIZE;
          break;
        case 'ArrowDown':
          tempY += SNAKE_SIZE;
          break;
        case 'ArrowLeft':
          tempX -= SNAKE_SIZE;
          break;
      }

      if (tempX < 0 || tempX > canvas.width - SNAKE_SIZE || tempY < 0 || tempY > canvas.height - SNAKE_SIZE) {
        gameOver = true;
      }

      if (!gameOver) {
        this.x = tempX;
        this.y = tempY;
      }

      if (this.x === apple.x && this.y === apple.y) {
        crunchSound.currentTime = 0;
        crunchSound.play();
        score++;
        speed -= speed * .05;
        console.log(speed);
        apple.move();
      }

      context.drawImage(snakeHead, this.x, this.y);
    }
  }

  class Apple {
    constructor() {
      this.move();
    }

    draw() {
      context.drawImage(appleImg, this.x, this.y);
    }

    move() {
      this.x = Apple.#getRandomNumber(canvas.width);
      this.y = Apple.#getRandomNumber(canvas.height);

      // this.draw();
    }

    static #getRandomNumber(max) {
      let num = Math.floor(Math.random() * (max + 1));
      return num - num % SNAKE_SIZE;
    }
  }

  let gameOver = false;

  function gameLoop() {
    console.log(direction);
    context.clearRect(0, 0, canvas.width, canvas.height);
    snake.move();
    apple.draw();
    if(! gameOver) {
      setTimeout(gameLoop, speed);
    } else {
      context.fillStyle = 'green';
      context.font = 'bold 32px Arial';
      const gameOverText = 'Game Over!!';
      const sm = context.measureText(gameOverText);
      context.fillText(gameOverText, (canvas.width / 2) - (sm.width / 2), (canvas.height / 2) - ((sm.actualBoundingBoxAscent
        + sm.actualBoundingBoxDescent) / 2));
      //crashSound.currentTime = 0;
      crashSound.play();
    }

    context.fillStyle = 'red';
    context.font = 'bold 32px Arial';
    const scoreText = `score: ${score}`;
    const sm = context.measureText(scoreText);
    context.fillText(scoreText, canvas.width - sm.width - 16, sm.actualBoundingBoxAscent
      + sm.actualBoundingBoxDescent + 16);
  }

  async function loadImg(src) {
    return new Promise((resolve, reject) => {
      const img = document.createElement('img');
      img.src = src;
      img.onload = () => {
        resolve(img);
      };
      img.onerror = e => reject(`failed to load ${src} - ${e}`);
    });
  }

  let direction = 'ArrowRight';
  document.addEventListener('keydown', e => {
    console.log(e.key);
    switch (e.key) {
      case 'ArrowUp':
      case 'ArrowDown':
      case 'ArrowLeft':
      case 'ArrowRight':
        direction = e.key;
        break;
    }
  });

  /*const snakeHead = document.createElement('img');
  snakeHead.src = 'images/snakehead.png';

  const appleImg = document.createElement('img');
  appleImg.src = 'images/apple.png';*/

  //let snake;
  //let apple;
  /*snakeHead.onload = () => {
    snake = new Snake();
    setTimeout(gameLoop, speed);
  };

  appleImg.onload = () => {
    apple = new Apple();
  };*/

  // tbd - add try catch
  const snakeHeadP = loadImg('images/snakehead.png');
  const appleImgP = loadImg('images/apple.png');

  // tbd - use destructuring...
  const images = await Promise.all([snakeHeadP, appleImgP]);
  let snakeHead = images[0];
  let appleImg = images[1];
  let snake = new Snake();
  let apple = new Apple();
  setTimeout(gameLoop, speed);
}());

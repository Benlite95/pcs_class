(function () {
  'use strict';

  const SNAKE_SIZE = 64;
  const canvas = document.querySelector('#theCanvas');
  const context = canvas.getContext('2d');
  const crashSound = document.querySelector('#crash');

  function resizeCanvas() {
    canvas.width = (window.innerWidth - 2) - ((window.innerWidth - 2) % SNAKE_SIZE);
    canvas.height = (window.innerHeight - 2) - ((window.innerHeight - 2) % SNAKE_SIZE);
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  const snakeHead = document.createElement('img');
  snakeHead.src = 'images/snakehead.png';

  let gameOver = false;
  let score = 500;
  let x = -SNAKE_SIZE;
  let y = 0;
  function gameLoop() {
    console.log(direction);
    context.clearRect(0, 0, canvas.width, canvas.height);

    let tempX = x;
    let tempY = y;
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
      context.fillStyle = 'green';
      context.font = 'bold 32px Arial';
      const gameOverText = 'Game Over!!';
      const sm = context.measureText(gameOverText);
      context.fillText(gameOverText, (canvas.width / 2) - (sm.width / 2), (canvas.height / 2) - ((sm.actualBoundingBoxAscent
        + sm.actualBoundingBoxDescent) / 2));
      gameOver = true;
      //crashSound.currentTime = 0;
      crashSound.play();
    }

    if(! gameOver) {
      x = tempX;
      y = tempY;
      setTimeout(gameLoop, 1000);
    }

    context.drawImage(snakeHead, x, y);

    context.fillStyle = 'red';
    context.font = 'bold 32px Arial';
    const scoreText = `score: ${score}`;
    const sm = context.measureText(scoreText);
    context.fillText(scoreText, canvas.width - sm.width - 16, sm.actualBoundingBoxAscent
      + sm.actualBoundingBoxDescent + 16);
  }

  snakeHead.onload = () => {
    setTimeout(gameLoop, 1000);
  };

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
}());

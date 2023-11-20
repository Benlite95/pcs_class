(function () {
  'use strict';

  const theCanvas = document.querySelector('#theCanvas');
  const context = theCanvas.getContext('2d');

  context.fillRect(25, 25, 50, 50);

  context.fillStyle = 'red';
  context.fillRect(75, 75, 50, 50);

  context.strokeRect(125, 125, 100, 50);

  context.strokeStyle = 'black';
  context.strokeRect(74, 74, 52, 52);

  context.beginPath();
  context.moveTo(200, 200);
  context.lineTo(225, 225);
  context.lineTo(200, 250);
  //context.lineTo(200, 200);
  context.closePath();
  context.stroke();

  context.beginPath();
  context.lineWidth = 5;
  context.strokeStyle = 'yellow';
  context.moveTo(175, 200);
  context.lineTo(150, 225);
  context.lineTo(175, 250);
  context.lineTo(175, 200);
  context.stroke();

  context.beginPath();
  context.arc(300, 300, 50, Math.PI, Math.PI / 3, true);
  context.stroke();

  context.beginPath();
  context.fillStyle = 'green';
  context.arc(400, 400, 50, 0, Math.PI * 2);
  context.fill();

  //context.drawImage()

}());

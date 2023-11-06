(function () {
  'use strict';

  let dragging;// = false;
  let offset;
  //let theBox = document.querySelector('.box');

  function mouseMoveHandler(e) {
    e.preventDefault();

    if (dragging) {
      console.log(e);

      //dragging.css({ top: e.pageY - offset.y, left: e.pageX - offset.x });
      const currentStyle = getComputedStyle(dragging);
      console.log(currentStyle);
      /*theBox*/dragging.style = `top: ${e.pageY - offset.y}px; left: ${e.pageX - offset.x}px; background-color: ${currentStyle.backgroundColor}`;
    }
  }

  //$(document).on('mousedown', '.box', e => {

  /*theBox*/document.addEventListener('mousedown', e => {
    if (e.target.matches('.box')) {
      //dragging = true;
      dragging = e.target;
      offset = { y: e.offsetY, x: e.offsetX };
    }

    //theBox.addEventListener('mousemove', mouseMoveHandler);
  });

  document.addEventListener('mousemove', mouseMoveHandler);

  document.addEventListener('mouseup', e => {
    console.log('mouse up');
    dragging = false;
    //theBox.removeEventListener('mousemove', mouseMoveHandler);
  });

  const colorInput = document.querySelector('#color');
  document.querySelector('#add').addEventListener('click', () => {
    const newBox = document.createElement('div');
    newBox.style = `background-color: ${colorInput.value};`;
    newBox.className = 'box';
    document.body.appendChild(newBox);
  });
}());

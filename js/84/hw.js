/* global $ */
(function () {
  'use strict';

  /*const parts = [];

  function loadParts() {
    const partsContainer = document.querySelector('#parts');
    const partsContainerWidth = parseInt(getComputedStyle(partsContainer).width);
    // window.innerWidth / 4

    const PART_SPACE = 110;

    let x = 0;
    let y = 0;
    for(let i = 1; i <= 23; i++) {
      const part = document.createElement('img');
      part.className = i < 23 ? 'part' : 'part potato';
      part.src = `images/${i}.png`;

      part.style = `top: ${y}px; left: ${x}px`;

      partsContainer.appendChild(part);

      x += PART_SPACE;

      if (x >= partsContainerWidth - PART_SPACE) {
        x = 0;
        y += PART_SPACE;
      }

      parts.push(part);
    }
  }

  function saveState() {
    const partsData = [];

    parts.forEach(part => {
      const style = getComputedStyle(part);
      partsData.push({
        top: style.top,
        left: style.left,
        zindex: style.zIndex
      });
    });

    localStorage.setItem('parts', JSON.stringify(partsData));
  }

  function loadState() {
    const partsData = JSON.parse(localStorage.getItem('parts')) || [];
    partsData.forEach((part, index) => {
      parts[index].style = `top: ${part.top}; left: ${part.left}; z-index: ${part.zindex}`;
    });
  }

  let dragging;
  let offset;
  let zindex = 1;

  document.addEventListener('mousedown', e => {
    if (e.target.matches('.part')) {
      dragging = e.target;

      console.log(dragging.style);

      offset = { y: e.offsetY, x: e.offsetX };

      if (!dragging.matches('.potato')) {
        dragging.style.zIndex = zindex++;
      }
    }
  });

  document.addEventListener('mousemove', e => {
    e.preventDefault();

    if (dragging) {
      dragging.style.top = `${e.pageY - offset.y}px`;
      dragging.style.left = `${e.pageX - offset.x}px`;
    }
  });

  document.addEventListener('mouseup', e => {
    if (dragging) {
      dragging = false;
      saveState();
    }
  });

  loadParts();
  loadState();*/

  const parts = [];

  function loadParts() {
    const partsContainer = $('#parts');
    const partsContainerWidth = partsContainer.css('width');
    // window.innerWidth / 4

    const PART_SPACE = 110;

    let x = 0;
    let y = 0;
    for (let i = 1; i <= 23; i++) {

      const part = $(`
        <img src="images/${i}.png" />
      `)
        .appendTo(partsContainer)
        .css({
          top: `${y}px`,
          left: ` ${x}px`
        })
        .addClass('part');

      if (i === 23) {
        part.addClass('potato');
      }

      x += PART_SPACE;

      if (x >= partsContainerWidth - PART_SPACE) {
        x = 0;
        y += PART_SPACE;
      }

      parts.push(part);
    }
  }

  function saveState() {
    const partsData = [];

    parts.forEach(part => {
      partsData.push({
        top: part.css('top'),
        left: part.css('left'),
        zIndex: part.css('z-index')
      });
    });

    localStorage.setItem('parts', JSON.stringify(partsData));
  }

  function loadState() {
    const partsData = JSON.parse(localStorage.getItem('parts')) || [];
    partsData.forEach((part, index) => {
      parts[index].css(part);
    });
  }

  let dragging;
  let offset;
  let zindex = 1;

  /*$(document).on('mousedown', '.part', e => {
    dragging = $(e.target);

    offset = { y: e.offsetY, x: e.offsetX };

    if (!dragging.is('.potato')) {
      dragging.css('zIndex', zindex++);
    }
  }).on('mousemove', e => {
    e.preventDefault();

    if (dragging) {
      dragging.css({
        top: `${e.pageY - offset.y}px`,
        left: `${e.pageX - offset.x}px`
      });
    }
  }).on('mouseup', e => {
    if (dragging) {
      dragging = false;
      saveState();
    }
  });*/

  loadParts();
  loadState();

  $('.part').draggable({
    stack: '.part',
    stop: saveState
  });
}());

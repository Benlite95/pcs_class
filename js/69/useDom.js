(function () {
  'use strict';

  const theButton = document.getElementById('theButton');
  const clickCount = document.getElementById('clickCount');

  let count = 0;
  theButton.addEventListener('click', function () {
    clickCount.innerText = ++count;
  });
}());

'use strict';

var theButton = document.getElementById('theButton');
var count = 0;
theButton.addEventListener('click', function () {
  var clickCount = document.getElementById('clickCount');
  clickCount.innerText = ++count;
});

(function () {
  'use strict';

  function showDate() {
    console.log(new Date().toLocaleDateString(), new Date().toLocaleTimeString());
  }
  showDate();

}());

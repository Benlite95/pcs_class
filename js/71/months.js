window.myApp = window.myApp || {};

window.myApp.utils = (function getMonthUtils(theModule) {
  'use strict';

  const months = ['January', 'February', 'March', 'April'];

  function getMonth(index) {
    return months[index - 1];
  }

  function getMonthIndex(month) {
    for (let i = 0; i < months.length; i++) {
      if (months[i] === month) {
        return i + 1;
      }
    }
  }

  /*return {
    getMonth,
    getMonthIndex
  };*/
  theModule.getMonth = getMonth;
  theModule.getMonthIndex = getMonthIndex;

  return theModule;
}(window.myApp.utils || {}));

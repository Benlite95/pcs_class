window.app = window.app || {};

window.app.counterCreator = (function () {
  'use strict';

  let numberOfCounters = 0;

  return function () {
    let i = 0;

    numberOfCounters++;

    return {
      increment: () => ++i,
      getCurrentCount: () => i,
      getNumberOfCounters: () => numberOfCounters
    };
  };

  /*return {
    create: function () {
      let i = 0;

      numberOfCounters++;

      return {
        increment: () => ++i,
        getCurrentCount: () => i
      };
    },
    getNumberOfCounters: () => numberOfCounters
  };*/
}());

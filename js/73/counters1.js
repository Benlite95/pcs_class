window.app = window.app || {};
window.app.theCounter = (function () {
  'use strict';

  let i = 0;

  return {
    increment: () => ++i,
    getCurrentCount: () => i
  };
}());

window.app = window.app || {};

window.app.models = (function (theModule) {
  'use strict';

  theModule.a = () => console.log('model a called');

  return theModule;

}(window.app.models || {}));

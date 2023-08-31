window.app = window.app || {};
window.app.views = window.app.views || {};

/*window.app.views =*/ (function (theModule) {
  'use strict';

  theModule.a = () => console.log('views b called');
  //return theModule;
}(window.app.views /*|| {}*/));

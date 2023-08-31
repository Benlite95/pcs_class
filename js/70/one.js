//const x = 0;
//const y = x ? x : -1;
//const y = x || -1;
//const y = x ?? -1;
//console.log(y);

window.app = (function (theModule) {
  'use strict';

  /*return {
    a: () => console.log('a called'),
    b: () => console.log('b called')
  };*/

  theModule.a = () => console.log('one.a called');
  theModule.b = () => console.log('b called');

  return theModule;
}(window.app || {}));

window.app.a();
window.app.b();

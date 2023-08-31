window.app = (function (foo) {
  'use strict';

  /*return {
    c: () => console.log('c called'),
    d: () => console.log('d called')
  };*/
  foo.c = () => console.log('c called');
  foo.d = () => console.log('d called');

  //foo.a = () => console.log('two.a called');

  return foo;
}(window.app || {}));

window.app.c();
window.app.d();

window.myApp = window.myApp || {};
window.myApp.utils = window.myApp.utils || {};

/*window.myApp.utils =*/ (function (theModule, theAlert) {
  'use strict';
  /*const privateVar = 'foo';
  function privateFunction() {

  }*/

  /*function caseInsensitiveCompare(a, b) {
    return a.toLowerCase() === b.toLowerCase();
  }*/

  /*return {
    caseInsensitiveCompare
  };*/
  theModule.caseInsensitiveCompare = (a,b) => {
    return a.toLowerCase() === b.toLowerCase();
  };

  theModule.showMessage = msg => theAlert(msg);

  // return theModule;
}(window.myApp.utils /*|| {}*/, /*alert*/ msg => console.log(msg)));

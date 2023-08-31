(function () {
  'use strict';

  const functions = [];


  for (var /*let*/ i = 0; i < 5; i++) {
    console.log(`creating function ${i}`);
    /*functions[i] = function () {
      console.log(i);
    };*/
    //functions[i] = createFunction(i);
    functions[i] = (function (x) {
      return function () {
        console.log(x);
      };
    }(i));
    functions[i]();
  }

  /*function createFunction (x) {
    return function() {
      console.log(x);
    };
  }*/

  //console.log('i', i);
  functions.forEach(f => f());
}());

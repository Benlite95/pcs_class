'use strict';

var theButton = document.getElementById('theButton');
var clickCount = document.getElementById('clickCount');
var count = 0;
/*theButton.addEventListener('click', function () {
  //console.log('button was clicked');
  //clickCount.innerText = ++count;
  clickCount.innerHTML = `<button>${++count}</button>`;
});*/


/*function clickHandler(e) {
  console.log(e);
  clickCount.innerText = ++count;
}
theButton.addEventListener('click', clickHandler);*/

theButton.addEventListener('click',  () => clickCount.innerText = ++count);

///////////////////////////////////////////////
function add(a,b) {
  return a+b;
}

console.log(add(1,2));
console.log(add('Hello', 'World'));
//////////////////////////////////////////////////
var theName = 'Joe';
//....
//theNam = 'Donald';
console.log(`Hello ${theName}`);

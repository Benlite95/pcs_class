'use strict';
//var x;
//var subtract;

console.log(x);
var x = 5;
//x = 5;
console.log(x);

// console.log(z);

console.log(add(5, 5));

function add(a, b) {
  console.log(a, typeof a);
  return a + b;
}

console.log(add(5,5));

//console.log(subtract(5, 3));

var subtract = function(a,b) {
  return a - b;
};

/*subtract = function (a, b) {
  return a - b;
};*/

console.log(subtract(5,3));

function foo() {
  // var q;
  console.log(q);
  var q = 1;
  // q = 1;
  console.log(q);
}

//console.log(q);

for (var i = 0; i < 5; i++) {
  var insideForLoop = 'foo';
  console.log(i);
}

console.log(i, insideForLoop);

//////////////////////

//console.log(z);

//console.log(myVal);
let myVal = 613;
console.log(myVal);

for (let i2 = 0; i2 < 5; i2++) {
  let insideForLoop2 = 'foo';
  console.log(i2);
}

//console.log(i2, insideForLoop2);

let bar;
console.log(bar);
///
bar = 5;

/////////

const PI = 3.14;
// PI = 3.13;

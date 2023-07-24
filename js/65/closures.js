'use strict';

greet();

function greet() {
  console.log('Hello');
}

greet();

//console.log(add(1, 2));
let add = function(a,b) {
  return a + b;
};
console.log(add(1,2));

function getGreeter() {
  return function () {
    console.log('Hello');
  };
}

let theGreeter = getGreeter();
theGreeter();

function getBetterGreeter() {
  console.log('line 27');
  return function (name) {
    console.log(`Hello ${name}`);
  };
}

console.log('line 33');
let theBetterGreeter = getBetterGreeter();
console.log('line 35');
theBetterGreeter('Joe');

function getBestGreeter(name) {
  let z = 5;
  //let a,b,c,de,f,
  return function () {
    console.log(`Hello ${name}`);
  };
}

let sayHelloToJoe = getBestGreeter('Joe');
sayHelloToJoe();
let sayHelloToKamala = getBestGreeter('Kamala');
sayHelloToKamala();

//////////////////

/*function foo(a) {
  console.log(`in foo a = ${a}`);
  bar(a);
  // more code
}

function bar(b) {
  let c = 5;
  console.log(`in bar b = ${b}, c = ${c}`);
}

foo(1);


//[bar: b = 1, c = 5]
//[foo: a = 1]
*/

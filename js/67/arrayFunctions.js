'use strict';

const numbers = [1,2,3,4,5,6,7,8,9];
console.log(numbers);

/*for(let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}*/

function printIt(it, index, theArray) {
  console.log('printit', it, index, theArray);
}

printIt('foo');

numbers.forEach(printIt);
numbers.forEach(console.log);

function ourForEach(theArray, callbackFn) {
  for (let index = 0; index < theArray.length; index++) {
    callbackFn(theArray[index], index, theArray);
  }
}

ourForEach(numbers, printIt);
ourForEach(numbers, console.log);

ourForEach(numbers, function(elem) {
  console.log('inline func', elem);
});

ourForEach(numbers, elem => console.log(elem));

/*
(x) => {console.log(x);};

(x) => console.log(x);

() => {};
x => console.log(x);

(a,b) => console.log(a+b);

(a,b) => a + b;

(a,b) => {
  return a + b;
};
*/

const printSomething = x => console.log(x);
printSomething('hello');

const add = (a, b) => a + b;

console.log(add(1,2));

function isEven(x) {
  //return x % 2 === 0;
  return !(x % 2);
}

console.log(isEven(1));
console.log(isEven(2));

//const evens = numbers.filter(isEven);
//console.log(evens);

const evens = numbers.filter(x => !(x % 2));
console.log(evens);

function ourFilter(anArray, testCallbackFn) {
  const results = [];
  /*for(let i = 0; i < anArray.length; i++) {
    if(testCallbackFn(anArray[i])) {
      results.push(anArray[i]);
    }
  }*/

  anArray.forEach(elem => {
    if(testCallbackFn(elem)) {
      results.push(elem);
    }
  });
  return results;
}

const evens2 = ourFilter(numbers, isEven);
console.log(evens2);

const odds = ourFilter(numbers, x => x % 2);
console.log(odds);

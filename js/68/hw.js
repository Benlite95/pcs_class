'use strict';

function ourEvery(theArray, callbackFn) {
  /*for (let i = 0; i < theArray.length; i++) {
    if (!callbackFn(theArray[i])) {
      return false;
    }
  }
  return true;*/

  let someoneFailed = false;
  theArray.forEach(elem => {
    if (!callbackFn(elem)) {
      someoneFailed = true;
    }
  });

  return !someoneFailed;
}

const upper = ['A', 'B', 'C'];
const lower = ['a', 'b', 'c'];
const mixed = ['A', 'b', 'C'];

function isUpper(char) {
  return char.toUpperCase() === char;
}

const isUpper2 = char => char.toUpperCase() === char;

console.log('ourEvery(upper, isUpper)', ourEvery(upper, isUpper));
console.log('ourEvery(lower, isUpper)', ourEvery(lower, isUpper));
console.log('ourEvery(mixed, isUpper', ourEvery(mixed, isUpper));

console.log('upper.every(isUpper)', upper.every(isUpper2));
console.log('lower.every(isUpper)', lower.every(isUpper2));
console.log('mixed.every(isUpper)', mixed.every(char => char.toUpperCase() === char));

////////////////////////

function ourSome(theArray, callbackFn) {
  for(let i = 0; i < theArray.length; i++) {
    if(callbackFn(theArray[i])){
      return true;
    }
  }
  return false;
}

console.log('ourSome(upper, isUpper)', ourSome(upper, isUpper));
console.log('ourSome(lower, isUpper)', ourSome(lower, isUpper));
console.log('ourSome(mixed, isUpper', ourSome(mixed, isUpper));

console.log('upper.some(isUpper)', upper.some(isUpper));
console.log('lower.some(isUpper)', lower.some(isUpper));
console.log('mixed.some(isUpper)', mixed.some(isUpper));

///////////////////////

function onlyIf(theArray, testCallback, actionCallback) {
  theArray.forEach(elem => {
    if (testCallback(elem)) {
      actionCallback(elem);
    }
  });
}

function print(c) {
  console.log(c);
}

console.log('onlyIf(upper, isUpper, console.log)');
onlyIf(upper, isUpper, /*print*/console.log);

console.log('onlyIf(lower, isUpper, c => console.log(c))');
onlyIf(lower, isUpper, function (c) { console.log(c); });

console.log('onlyIf(mixed, isUpper, c => console.log(c))');
onlyIf(mixed, isUpper, c => console.log(c));

const uppers = mixed.filter(isUpper);
uppers.forEach(e => console.log(e));

console.log('mixed.filter(isUpper).forEach(...)');
mixed
  .filter(isUpper)
  .forEach(/*e => console.log(e)*/ /*print*/ console.log);

//////////////////

function multiple(a, b) {
  return a * b;
}

console.log('multiply(2, 3)', multiple(2, 3));
console.log('multiply(3, 3)', multiple(3, 3));

function getMultipler() {
  return function (a, b) {
    return a * b;
  };
}

const theMultiplier = getMultipler();
console.log('theMultiplier(4,5)', theMultiplier(4,5));

function getBestMultipler(a) {
  return function (b) {
    return a * b;
  };
}

const multiplyBy4 = getBestMultipler(4);
console.log('multiplyBy4(5)', multiplyBy4(5));

console.log('getBestMultipler(4)(5)', getBestMultipler(4)(5));

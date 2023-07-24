'use strict';

let x = 5;
let y = '5';

//console.log(x == y);
//console.log(x != y);

// = = =
console.log(x === y);
// ! = =
console.log(x !== y);

console.log(x === parseInt(y));
//console.log(Number(y));
console.log(x === Number(y));
console.log(x === +y);

let a = '5';
let b = 2;
console.log(a + b);
console.log(a - b);

let z = 'Joe' - 2;
console.log(z, typeof(z));
console.log(z === NaN);
console.log(isNaN(z));
z = z + 2;
//z = 5;
console.log(z);

console.log(('b' + 'a' + +'b' + 'a').toLowerCase());

let undefinedVariable;
let nullVariable = null;
console.log(undefinedVariable, nullVariable);

console.log(undefined === nullVariable);

let c = null;
if(c === undefined || c === null) {
  console.log('c does not have a value');
}
if (c == undefined) {
  console.log('#2 c does not have a value');
}

console.log(typeof(null), typeof(undefined));

let foo = true;
let bar = false;
console.log(foo, bar);
if(b < 5) {
  console.log('b < 5');
}

foo = 0;
foo = '';
foo = null;
foo = undefined;
foo = NaN;
foo = 'hello';
foo = -5;
if (!foo) {
  console.log('foo is !true');
} else {
  console.log('foo is true');
}

let d  = 'hello';
if (d) {
  console.log('d');
}

console.log(false + 1, typeof(true));

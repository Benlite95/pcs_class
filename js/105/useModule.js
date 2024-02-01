// import foo, { goodbye as bar } from './module.js';
//foo();
//goodbye();
//bar();

const myModule = require('./module.js');
myModule.hello();
myModule.goodbye();

const Person = require('./Person.js');
const potus = new Person('Joe', 'Biden');
potus.print();

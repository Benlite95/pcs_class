/* global myApp */
console.log(myApp.utils.getMonth(1));
console.log(window.myApp.utils.getMonthIndex('February'));

console.log(myApp.utils.caseInsensitiveCompare('JoE', 'joe'));
console.log(myApp.utils.caseInsensitiveCompare('JoE', 'JoEy'));

myApp.utils.showMessage('Hi!');

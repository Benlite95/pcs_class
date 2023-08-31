/* global calculator */

(function () {
  'use strict';

  window.calculator.setRate(.1);
  calculator.setYears(2);
  console.log(calculator.calculateInterest(100));
  // alert('hi!');

  calculator.print();

  // console.log(window.calculator.setRate(.1).setYears(2).calculateInterest(100));
}());

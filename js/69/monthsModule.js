// 'use strict';

/*const months = ['January', 'February', 'March', 'April'];

function getMonth(index) {
  return months[index - 1];
}

function getMonthIndex(month) {
  for (let i = 0; i < months.length; i++) {
    if (months[i] === month) {
      return i + 1;
    }
  }
}*/

/*
const monthUtils = {
  months: ['January', 'February', 'March', 'April'],

  getMonth(index) {
    return this.months[index - 1];
  },

  getMonthIndex(month) {
    for (let i = 0; i < this.months.length; i++) {
      if (this.months[i] === month) {
        return i + 1;
      }
    }
  }
};

console.log(monthUtils.getMonth(2));
console.log(monthUtils.getMonthIndex('April'));*/

// IIFE
const monthUtils = (function () {
  'use strict';

  const months = ['January', 'February', 'March', 'April'];

  function foo() {
    console.log('Foo was called');
  }

  function getMonth(index) {
    foo();
    return months[index - 1];
  }

  function getMonthIndex(month) {
    for (let i = 0; i < months.length; i++) {
      if (months[i] === month) {
        return i + 1;
      }
    }
  }

  return {
    /*getMonth(index) {
      foo();
      return months[index - 1];
    },

    getMonthIndex(month) {
      for (let i = 0; i < months.length; i++) {
        if (months[i] === month) {
          return i + 1;
        }
      }
    }*/

    getMonth,
    getMonthIndex
  };
}());

// const monthUtils = createMonthUtils();

console.log(monthUtils.getMonth(2));
console.log(monthUtils.getMonthIndex('April'));
// foo();

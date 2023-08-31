window.calculator = (function interestCalculator() {
  'use strict';

  let rate;
  let years;

  /*function setRate(r) {
    rate = r;
  }

  function setYears(y) {
    years = y;
  }*/

  console.log('this', this);

  function calculateInterest(principle) {
    let p = principle;
    for (let i = 0; i < years; i++) {
      p += p * rate;
    }
    return p - principle;
  }

  // setRate(.1);
  // setYears(2);
  // console.log(calculateInterest(100));

  return {
    // setRate,
    // setYears,
    /*setRate(r) {
      console.log('in setRate', this);
      rate = r;
      return this;
    },
    setYears(y) {
      years = y;
      return this;
    },*/
    setRate: r => {
      rate = r;
      console.log('in setRate', this);
      return this;
    },
    setYears: y => {
      years = y;
      return this;
    },

    print() {
      console.log('in print', this);
      
      console.log(`rate: ${rate} years: ${years}`);

      const setTheRate = r => {
        rate = r;
        console.log('in setRate', this);
        return this;
      };

      setTheRate(100).setYears(5);
      console.log(`rate: ${rate} years: ${years}`);
    },
    calculateInterest
  };
}());

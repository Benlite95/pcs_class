(function () {
  'use strict';

  const potus = {
    first: 'Joe',
    last: 'Biden',
    age: 135,
    print1: function () {
      console.log(`first: ${this.first} last: ${this.last} age: ${this.age}`);
    },
    live: function () {
      console.log(this);
      /*setInterval(function () {
        console.log('in interval', this);
        this.age++;
        //this.print1();
      }, 1000);*/
      /*setInterval(() => {
        console.log('in interval', this);
        this.age++;
        this.print1();
      }, 1000);*/

      const that = this;
      setInterval(function () {
        console.log('in interval', this);
        //this.age++;
        //this.print1();
        that.age++;
        that.print1();
      }, 1000);
    }
  };

  potus.print1();
  potus.live();
}());

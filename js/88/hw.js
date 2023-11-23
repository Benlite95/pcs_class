//(function () {
  'use strict';

  class Person {
    #age;

    constructor(first, last, age) {
      this.first = first;
      this.last = last;
      //this.#age = age;
      this.age = age;
    }

    get age() {
      return this.#age;
    }

    set age(age) {
      age = +age;
      if (isNaN(age) || age < 0 || age > 120) {
        throw new Error(`${age} is not a valid age`);
        //age = 0;
      }
      this.#age = age;
    }

    toString() {
      // return `first: ${this.first} last: ${this.last} age: ${this.age}`;

      /*let retVal = '';
      for(let prop in this) {
        if (this.hasOwnProperty(prop)) {
          retVal += `${prop}: ${this[prop]} `;
        }
      }
      return retVal;*/


      return Object.entries(this).map(([k,v]) => `${k}: ${v}`).join(' ') + ` age: ${this.age}`;
    }
  }

  const potus = new Person('Joe', 'Biden', 120); // 125);
  // potus.age = -50;
  potus.age = '35';
  //potus.age = 'apple';
  potus.age = null;
  potus.age = false;
  console.log(potus, potus.age);
  console.log(potus.toString());
  console.log(`I am ${potus}`);
  //potus.#age = 200;

  class Student extends Person {
    constructor(first, last, age, grade) {
      super(first, last, age);
      this.grade = grade;
    }
  }

  const student = new Student('Kamala', 'Harris', 60, 3.5);
  // student.age = 122;
  console.log(`I am ${student}`);

//}());

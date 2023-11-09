//(function () {
  'use strict';

  const potus = {
    first: 'Joe',
    last: 'Biden',
    print: function () {
      console.log(`${this.first} ${this.last}`);
    }
  };

  potus.print();

  /*function printPerson() {
    console.log(`${this.first} ${this.last}`);
  }

  function talk() {
    console.log(`${this.first} says: blah blah blah`);
  }*/

  const personFunctions = {
    print() {
      console.log(`${this.first} ${this.last}`);
    },
    talk() {
      console.log(`${this.first} says: blah blah blah`);
    }
  };

  function createPerson(first, last) {
    const person = {
      first,
      last,
      /*print: function () {
        console.log(`${this.first} ${this.last}`);
      }*/
      //print: printPerson,
      //talk

      // print: personFunctions.print,
      // talk: personFunctions.talk
    };

    Object.assign(person, personFunctions);

    return person;
  }

  const joe = createPerson('Joe', 'Biden');
  const kamala = createPerson('Kamala', 'Harris');

  joe.print();
  kamala.print();

  //printPerson();

  joe.talk();
  kamala.talk();

  function eat() {
    console.log(`${this.first} is eating`);
  }
  joe.eat = eat;
  kamala.eat = eat;
  joe.eat();
  kamala.eat();

  console.log(joe);

  /////////////////////

  const p = {
    first: 'Joe',
    last: 'Biden',
    toString: function () {
      console.log('in p.toString');
    }
  };

  console.log(p);
  console.log(p.toString());

  p.__proto__ = personFunctions;

  p.print();
  p.talk();

  function createPerson2(first, last) {
    const p = Object.create(personFunctions);
    p.first = first;
    p.last = last;
    return p;
  }

  const donald = createPerson2('Donald', 'Trump');
  donald.talk();
  donald.print();

  console.log(donald);

  personFunctions.eat = function () {
    console.log(`${this.first} is eating`);
  };

  donald.eat();
  p.eat();


  function Person(first, last) {
    this.first = first;
    this.last = last;
  }
  Person.prototype.eat = function () {
    console.log(`${this.first} is eating`);
  }

  const p2 = new Person('Alejandro', 'Myorkis');
  console.log(p2);

  const p3 = Object.create(Person.prototype);
  Person.call(p3, 'Alejandro', 'Myorkis');
  console.log(p3);
  p3.eat();


  // Person('foo', 'bar');
//}());

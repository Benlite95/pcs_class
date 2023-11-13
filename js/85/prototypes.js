(function () {
  'use strict';

  const personFunctions = {
    print() {
      console.log(`I am ${this.first} ${this.last}`);
    },
    talk() {
      console.log(`${this.first} ${this.last} says hi!`);
    }
  };

  function createPerson(first, last) {
    const person = {
      first,
      last
    };
    Object.assign(person, personFunctions);
    return person;
  }

  const p1 = createPerson('Joe', 'Biden');
  const p2 = createPerson('Kamala', 'Harris');

  console.log(p1, p2);

  p1.talk();
  p2.print();

  /////////////////////////////////////////

  function createPerson2(first, last) {
    const person = Object.create(personFunctions);
    person.first = first;
    person.last = last;
    return person;
  }

  const p3 = createPerson2('Donald', 'Trump');
  p3.talk();
  p3.print();
  console.log(p3);

  //p3.sleep();

  personFunctions.sleep = function () {
    console.log(`${this.first} ${this.last} is sleeping. zzzzzzzzzz.`);
  };

  //p1.sleep();
  p3.sleep();

  //////////////////////

  function Person(first, last) {
    this.first = first;
    this.last = last;
    //Person.prototype.numberOfPeople++;
    Person.numberOfPeople++;
  }
  Person.prototype.print = function () {
    console.log(`I am ${this.first} ${this.last}`);
  };

  Person.prototype.talk = function () {
    console.log(`${this.first} ${this.last} says hi!`);
  };
  Person.prototype.sleep = function () {
    console.log(`${this.first} ${this.last} is sleeping. zzzzzzzzzz.`);
  };
  //Person.prototype.numberOfPeople = 0;
  Person.numberOfPeople = 0;
  //Person.prototype.printNumberOfPeople = function () {
  Person.printNumberOfPeople = function () {
    //console.log(`There are now ${Person.prototype.numberOfPeople} people`);
    //console.log(`There are now ${this.numberOfPeople} people`);
    console.log(`There are now ${Person.numberOfPeople} people`);
    console.log(`There are now ${this.numberOfPeople} people`);
  };

  const p4 = new Person('Melania', 'Trump');
  console.log(p4);

  const p5 = new Person('Nikki', 'Hailey');
  console.log(p5);

  p4.numberOfPeople = -10;
  //p4.printNumberOfPeople();
  //p5.printNumberOfPeople();
  Person.printNumberOfPeople();

  ////////////////////////////

  function Employee(first, last, department) {
    //this.first = first;
    //this.last = last;
    //Person.numberOfPeople++;

    Person.call(this, first, last);
    this.department = department;
  }
  //Employee.prototype = Person.prototype;
  //Employee.prototype = new Person();
  Employee.prototype = Object.create(Person.prototype);
  Employee.prototype.constructor = Employee;

  Employee.prototype.print = function () {
    console.log(`I am ${this.first} ${this.last} ${this.department}`);
  };

  const e1 = new Employee('Elon', 'Musk', 'CEO');
  console.log(e1);

  e1.print();
  e1.sleep();
  e1.talk();

  p5.print();

  const e2 = new Employee('Bill', 'Gates', 'CEO');
  console.log(e2);

  Person.printNumberOfPeople();


  /*const divs = document.querySelectorAll('div');
  console.log(divs);
  divs.forEach(d => console.log(d));
  //divs.map(d => console.log(d));
  Array.prototype.map.call(divs, d => console.log('foo', d));*/

  /////////////////////////////////////////

  class PersonC {
    static numberOfPersons = 0;
    age = 0;
    #weight = 200;
    #privateFunction() {
      console.log('Im a private function');
    }

    static printNumberOfPersons() {
      console.log(`there are now ${PersonC.numberOfPersons} persons`);
    }

    constructor(first, last) {
      this.first = first;
      this.last = last;
      PersonC.numberOfPersons++;

      const somethingPrivate = 'foo';
      this.printSomethingPrivate = function () {
        console.log(somethingPrivate);
      };
    }

    print() {
      this.#privateFunction();
      console.log(`I am ${this.first} ${this.last} ${this.age} ${this.#weight}`);
    }

    talk() {
      console.log(`${this.first} ${this.last} says hi!`);
    }

    sleep() {
      console.log(`${this.first} ${this.last} is sleeping. zzzzzzzzzz.`);
    }
  }

  const pc1 = new PersonC('Ron', 'Desantis');
  console.log(pc1);
  //console.log(pc1.weight);
  pc1.printSomethingPrivate();
  //pc1.#privateFunction();

  pc1.age = 45;
  pc1.print();
  pc1.talk();
  pc1.sleep();

  console.log(p3, p5, pc1);

  class EmployeeC extends PersonC {
    constructor(first, last, department) {
      super(first, last);
      this.department = department;
    }

    print() {
      //console.log(`I am ${this.first} ${this.last} ${this.department}`);
      super.print();
      console.log(this.department);
    }
  }

  const ec1 = new EmployeeC('Avi', 'Shnall', 'Assemblyman');
  ec1.print();

  console.log(e2, ec1);

  PersonC.printNumberOfPersons();
}());

x = 5;
(function () {
  'use strict';

  /*function printPerson(person) {
    console.log(`Name: ${person.name} Email: ${person.email}`);
  }*/

  function printPerson(date, time) {
    console.log(this);
    console.log(`${date} ${time} - Name: ${this.name} Email: ${this.email}`);
  }

  const potus = {
    name: 'Joe Biden',
    email: 'jbiden@whitehouse.gov',
    print () {
      console.log(`Name: ${this.name} Email: ${this.email}`);
    }
    //print: printPerson
  };

  potus.print();
  //printPerson(potus);

  //printPerson();

  const potusesPrint = potus.print;
  console.log(potusesPrint);
  //potusesPrint();

  printPerson.call(potus);

  const vpotus = {
    name: 'Kamala Harris',
    email: 'kharris@whitehouse.gov'/*,

    printRandomPerson(person) {
      console.log(`Name: ${person.name} Email: ${person.email}`);
    }*/
  };

  printPerson.call(vpotus);

  potusesPrint.call(potus);
  potusesPrint.call(vpotus);

  // vpotus.printRandomPerson(potus);

  printPerson.call(vpotus, '8/27', '10:21');
  printPerson.apply(vpotus, ['8/27', '10:21']);

  function foo(a,b) {
    console.log(arguments);
    console.log(a,b);
  }

  foo(1,2,3,4,5,6);

  //////////////////////////////

  const greeter1 = {
    greeting: 'Hello'
  };

  const greeter2 = {
    greeting: 'Shalom'
  };

  function greet(name, foo) {
    console.log(`${this.greeting} ${name} - ${foo}`);
  }

  // greet('Joe');
  greet.call(greeter1, 'Joe');
  greet.apply(greeter2, ['kamala']);

  const sayHello = greet.bind(greeter1);
  sayHello('Joe');

  const sayShalomToKamala = greet.bind(greeter2, 'Kamala');
  sayShalomToKamala('this is foo');
}());

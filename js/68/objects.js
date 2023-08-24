'use strict';

/*class Person {
  public string first;
  public string last;

  public print() {
    System.WriteLine($"{first} {last}")
  }
}

Person potus = new Person();
potus.first = 'Joe';
potus.last = 'Biden';
potus.print();*/


function printPerson(p) {
  console.log(`First: ${p.first}\tLast: ${p.last}\tAge: ${p.age}`);
}

const potus = {
  first: 'Joe',
  last: 'Biden',
  age: 85,

  print: function () {
    console.log(`First: ${this.first}\tLast: ${this.last}\tAge: ${this.age}`);
  }
};

/*potus = {
  first: 'Donald'
};*/

console.log(potus);
printPerson(potus);
printPerson('foo');
potus.print();

function printAPerson() {
  console.log(`First: ${this.first}\tLast: ${this.last}\tAge: ${this.age}`);
}

function personCreator(f, last, age) {
  return {
    first: f,
    /*last:*/ last,
    /*age:*/ age,

    /*print: function () {
      console.log(`First: ${this.first}\tLast: ${this.last}\tAge: ${this.age}`);
    }*/

    print() {
      console.log(`First: ${this.first}\tLast: ${this.last}\tAge: ${this.age}`);
    }
    //print: printAPerson
  };
}

const joe = personCreator('Joe', 'Biden', 87);
const donald = personCreator('Donald', 'Trump', 82);

joe.print();
donald.print();

donald.indictments = 4;
console.log(donald);

donald.first = 'The Donald';
donald.print();

donald.age++;
console.log(donald);
donald.print();

/*
{
  "first": "Joe",
  "last": "Biden"
}*/

potus.sons = ['Beue', 'Hunter'];
const potusString = JSON.stringify(potus);
console.log(potusString, typeof potusString);

//////

const reconstitutedPotus = JSON.parse(potusString);
console.log(reconstitutedPotus, typeof reconstitutedPotus);
//reconstitutedPotus.print();

console.log('=>', potus, reconstitutedPotus);


const potus2 = personCreator(reconstitutedPotus.first, reconstitutedPotus.last, reconstitutedPotus.age);
potus2.print();

// AJAX

/*<Person>
  <first>Joe</first>
  <last>Biden</last>
</Person>

<Person first="Joe" last="Biden"/>*/

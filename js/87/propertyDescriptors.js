//(function () {
  'use strict';

  const potus = {
    first: 'Joe',
    last: 'Biden',
    age: 100,
    foo() {
       console.log('foo was called');
    }
  };

  potus.foo();
  potus.first = 'Donald';
  console.log(potus);
  delete potus.last;
  console.log(potus);

  const potus1 = Object.create({
    foo() { console.log('foo was called'); }
  }, {
    first: {value: 'Joe', writable: true},
    last: {value: 'Biden', configurable: true}
  });

  potus1.foo();
  potus1.first = 'Donald';
  console.log(potus1);
  delete potus1.last;
  console.log(potus1);

  Object.defineProperty(potus1, 'age', {
    value: 100,
    writable: true,
    configurable: true,
    enumerable: true
  });

  //Object.defineProperties()

  console.log(potus1);

  for(let key in potus) {
    console.log(`${key} is ${potus[key]}`);
  }

  const hunter = Object.create(potus);
  hunter.first = 'Hunter';
  console.log(hunter);

  for (let key in hunter) {
    //if(hunter.hasOwnProperty(key)) {
      console.log(`${key} is ${hunter[key]}`);
    //}
  }

  console.log('-------');
  for (let key in potus1) {
    console.log(`${key} is ${potus1[key]}`);
  }


  /////////////
  console.log('---keys----');
  const keys = Object.keys(hunter);
  keys.forEach(key => {
    console.log(`${key} - ${hunter[key]}`);
  });

  const values = Object.values(hunter);
  values.forEach(value => {
    console.log(`${value}`);
  });

  const entries = Object.entries(hunter);
  entries.forEach(entry => {
    console.log(`${entry[0]} - ${entry[1]}`);
  });

  entries.forEach(([key, value]) => {
    console.log(`${key} - ${value}`);
  });

  const things = ['foo',4];
  const [k,v] = things;
  console.log(k,v);


  const p = {
    first: 'Kamala',
    last: 'Harris'
  };

  Object.defineProperty(p, 'fullname', {
    get() {
      return `${this.first} ${this.last}`;
    },
    set(fullName) {
      const names = fullName?.split(' ');
      this.first = names ? names[0] : null;
      this.last = names ? names[1] : null;
    }
  });

  p.fullname = 'Nikki Hailey';
  console.log(p.fullname);

  //////////////////

  const anObject = {
    foo: 57,
    bar: 'hello',
    a: 5,
    b: 'something'
  };

  for(let k in anObject) {
    if (anObject.hasOwnProperty(k)) {
      console.log(k);
    }
  }

  const theKeys = Object.keys(anObject);
  console.log(theKeys);
  theKeys.forEach(key => console.log(`${key} ${anObject[key]}`));

  const theValues = Object.values(anObject);
  console.log(theValues);
  theValues.forEach(value => console.log(`${value}`));

  const theEntries = Object.entries(anObject);
  console.log(theEntries);
  theEntries.forEach(entry => console.log(`${entry[0]} ${entry[1]}`));
  theEntries.forEach(([theZero, theOne]) => console.log(`${theZero} ${theOne}`));
//}());

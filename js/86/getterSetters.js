
(function () {
  'use strict';

  function createPerson(first, last) {
    let _first = first;
    let _last = last;

    return {
      get first() {
        return _first;
      },
      set first(first) {
        if (!first?.trim().length) {
          throw new Error(`${first} is an invalid first name`);
        }
        _first = first;
      },
      get last() {
        return _last;
      },
      set last(last) {
        if (!last?.trim().length) {
          throw new Error(`${last} is an invalid last name`);
        }
        _last = last;
      },
      get fullname() {
        return `${_first} ${_last}`;
      },
      set fullName(fullname) {
        const names = fullname?.split(' ');
        this.first = names ? names[0] : null;
        this.last = names ? names[1] : null;
      }
    };
  }

  const p1 = createPerson('Joe', 'Biden');
  //p1._first = null;
  //p1.setFirst(' ');
  p1.first = 'Donald';
  //p1.last = '';
  p1.last = 'Trump';
  console.log(p1.first/*p1.getFirst()*/, p1.last, p1);
  console.log(p1.fullname);

  p1.fullName = 'Nicki Hailey';
  console.log(p1.fullname);

  /////

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  const [a, , b, c, ...rest] = numbers;
  console.log(a, b, c, rest);

  const p = { first: 'Joe', last: 'Biden', age: 205, iq: 33 };
  const { first: theFirst, last, ...bar } = p;
  console.log(theFirst, last, bar);

  // spread
  console.log(...numbers);

  console.log(Math.max(...numbers));

  /*function sum(a,b,c,d,e,f,g,h) {
    return a+b+c+d+e+f+g+h;
  }*/

  /*function sum() {
    console.log(arguments);
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
      total += arguments[i];
    }
    return total;
  }*/

  function sum(...args) {
    let total = 0;
    args.forEach(a => total += a);
    return total;
  }

  //console.log(sum(1,2,3,4,5));
  console.log(sum(...numbers));


  const hunter = { ...p, first: 'Hunter' };
  console.log(hunter);
}());

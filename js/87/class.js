//(function () {
  'use strict';

  class Person {
    #first;
    constructor(first, last) {
      this.#first = first;
      this.last = last;
    }

    get first() {
      return this.#first;
    }

    set first(first) {
      if (!first?.trim().length) {
        throw new Error(`${first} is an illegal first name`);
      }
      this.#first = first;
    }
  }

  const potus = new Person('Joe', 'Biden');
  //console.log(potus.getFirst());
  console.log(potus.first);

  ////////////////////////

class Person2 {
  constructor(first, last) {
    let _first = first;
    //let _last = last;

    Object.defineProperty(this, 'first', {
      get() {
        return _first;
      },
      set(first) {
        if (!first?.trim().length) {
          throw new Error(`${first} is an illegal first name`);
        }
        _first = first;
      }
    });
  }
}

const p2 = new Person2('Ron', 'Desantis');
p2.first = 'Don';
console.log(p2.first, p2);

//}());

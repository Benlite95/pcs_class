export default class Person {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }

  print() {
    console.log(`${this.first} ${this.last}`);
  }
}

export const f = 5;

export const b = 6;

const imPrivate = 7;

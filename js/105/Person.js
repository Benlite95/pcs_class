class Person {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }

  print() {
    console.log(this.first, this.last);
  }
}

module.exports = Person;

(function () {
  'use strict';

  function personCreator(n, a) {
    let name = n;
    let age = a;

    return {
      getName() {
        return name;
      },
      setName(n) {
        name = n;
        return this;
      },
      getAge() {
        return age;
      },
      setAge(a) {
        age = a;
        return this;
      },
      print() {
        console.log(`Name: ${name} Age: ${age}`);
        return this;
      }
    };
  }

  const potus = personCreator('Joe Biden', 105);
  console.log(potus);
  console.log(potus.getName());
  console.log(potus.getAge());

  potus.setAge(106);
  potus.setName('Joey Biden');
  console.log(potus.getName(), potus.getAge());

  potus
    .setAge(107)
    .print()
    .setName('Joe Biden')
    .getAge();

  console.log(potus.getName(), potus.getAge());
}());

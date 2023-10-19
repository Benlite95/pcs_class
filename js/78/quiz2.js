(function () {
  'use strict';

  const boyNames = ['Joe', 'Donald', 'Barack', 'George W', 'Bill'];
  const girlNames = ['Jill', 'Melania', 'Michelle', 'Laura', 'Hillary'];
  const lastNames = ['Biden', 'Trump', 'Obama', 'Bush', 'Clinton'];

  const MALE = 0;
  const FEMALE = 1;

  const people = [];
  let nextId = 1;

  // pick a random number between 1 and max
  function getRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
  }

  function personCreator(gender) {
    let firstNames = gender === MALE ? boyNames : girlNames;

    return {
      id: nextId++,
      gender,
      first: firstNames[getRandomNumber(firstNames.length) - 1],
      last: lastNames[getRandomNumber(lastNames.length) - 1],
      //spouse: undefined,

      print(printSpouse = true) {
        console.log(`id: ${this.id} first: ${this.first} last: ${this.last} gender: ${this.gender ? 'F' : 'M'}`);

        if (printSpouse) {
          console.log('spouse:');
          this.spouse?.print(false);
          console.log('\n');
        }
      }
    };
  }

  /*for(let i = 0; i < 20; i++) {
    const m = personCreator(MALE);
    const f = personCreator(FEMALE);

    console.log(m);

    m.spouse = f;
    f.spouse = m;

    people.push(m);
    people.push(f);
  }*/

  for (let i = 0; i < 40; i++) {
    people.push(personCreator(i % 2));
  }

  people.forEach(p => {
    if (!p.spouse) {
      const potentialMatches = people.filter(s => !s.spouse && s.gender !== p.gender);
      const spouse = potentialMatches[getRandomNumber(potentialMatches.length) - 1];
      p.spouse = spouse;
      spouse.spouse = p;
    }
  });

  // console.log(people);

  people.forEach(p => p.print());
}());

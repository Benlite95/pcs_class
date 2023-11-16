(function () {
  'use strict';

  const organism = {};
  const animal = Object.create(organism);
  const mammal = Object.create(animal);
  const dog = Object.create(mammal);

  animal.hasHair = false;
  mammal.hasHair = true;

  console.log(mammal.hasHair, mammal);
  console.log(animal.hasHair, animal);
  console.log(dog.hasHair, dog);

  dog.speak = function () {
    console.log('woof woof');
  };

  dog.speak();

  console.log(animal, mammal, dog);

  ///////////////////////

  const commander = Object.create(dog);
  commander.speak();
  console.log(commander.hasHair, commander);

  commander.name = 'commander';
  commander.weight = 100;
  commander.breed = 'german shepherd';
  commander.owner = {
    first: 'Joe',
    last: 'Biden'
  };

  console.log(commander);

  const rover = Object.create(commander);
  rover.name = 'Rover';
  rover.weight = 90;
  rover.owner = {
    first: 'Jill',
    last: 'Biden'
  };
  console.log(rover, commander);

}());

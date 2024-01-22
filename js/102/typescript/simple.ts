function greeter(person: /*string | number*/ goodPresident) {
  return `Hello ${person}. Your name is ${person.length} letters long`;
}

const trump = 'Donald Trump';//'Joe Biden'; // 5; //; // 5
document.body.innerHTML = greeter(trump);

type goodPresident = 'George Washington' | 'Ronald Reagan' | 'Donald Trump';

let x: number | string = 5;
x = 'foo';

let potus: goodPresident = 'Donald Trump';
//potus = 'Joe Biden';

let y;
y = 'foo';
y = 5;

//type Person = {
interface Person {
  first: string,
  last: string
}

function greeter2(person: Person) {
  return `Hello ${person.first} ${person.last}`;
}

const z: Person = {
  first: 'Joe',
  last: 'Biden'
}

const another = {
  first: 'Kamala',
  last: 'Harris'
}
document.body.innerHTML = greeter2(another);

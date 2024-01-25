import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    hello world
  </div>
`;

function greeter(person?: string) {
  return `Hello ${person}`;
}

console.log(greeter('Joe'));
console.log(greeter());

interface Person {
  first: string;
  last: string;
  age?: number;
  //birthday: Date;
}

function greeter2(person?: Person): 'Joe Biden' {
  //return `Hello ${person?.first} ${person?.last} ${person?.age}`;
  return 'Joe Biden';
}

let helloJoe = greeter2({ first: 'Joe', last: 'Biden' });
// helloJoe = 5;
helloJoe = 'Hi'!
console.log(helloJoe)


class Student implements Person {
  /*first: string;
  last: string;
  grade: number;
  age: number;*/
  //#weight: number;

  constructor(public first: string, public last: string, public grade: number, public age: number, private weight: number, foo?: number) {
    /*this.first = first;
    this.last = last;
    this.grade = grade;
    this.age = age;*/

    //this.#weight = weight;
    console.log(foo);
  }

  printWeight() {
    //console.log(this.#weight);
    console.log(this.weight);
  }
}

const kamala = new Student('kamala', 'harris', 0, 50, 150);
/*kamala.first = 'Kamala';
kamala.last = 'Harris';
kamala.grade = 0;
console.log(kamala.age);*/

//console.log(kamala.#weight);
console.log(kamala.weight);
kamala.printWeight();

function printStudent(person: Person) {
  console.log(`${person.first} ${person.last} ${(person as Student).grade}`);
}

printStudent(kamala);

const donald: Person = {
  first: 'Donald',
  last: 'Trump',
  //electionsWon: 2
}


const numbers = [1,2,3,4,5];
const letters = ['a', 'b', 'c'];
//const mixed: (string | number | Student)[] = [];
const mixed: (string | number | Student)[] = ['a', 1];
mixed.push('a');
mixed.push(1);
mixed.push(kamala);
mixed.push(donald);

//numbers.push('x');
//letters.push(1);
mixed.push('b');
mixed.push(2);
mixed.push(kamala);

function removeFromArray<T extends Person>(theArray: T[], index: number) {
  theArray.splice(index, 1);
  console.log(theArray[0].first);
  return theArray;
}

const someStudents = [new Student(), new Student()];
removeFromArray(someStudents, 1);

const numbers2 = removeFromArray(numbers, 2);
console.log(numbers2);

const letters2 = removeFromArray(letters, 1);
console.log(letters2);

numbers2.push('x');
letters2.push(1);

type Employee = [string, string, string, number];
let employee: Employee; //[string, string, string, number];
employee = ['joe', 5, 'president', 100];
console.log(employee);

import FooPerson, { foo as f, bar } from './person.js';

const p = new FooPerson('Joe', 'Biden');
p.print();
console.log(p);
console.log(f);
console.log(bar);

//let Person = 5;

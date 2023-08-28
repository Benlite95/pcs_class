'use strict';

/*function printCompany() {
  console.log(`Name: ${this.name}`);
}*/

function createEmployee(name, dept) {
  return {
    name,
    dept,

    print() {
      console.log(`Name: ${this.name} Dept: ${this.dept}`);
    }
  };
}

function createCompany(name) {
  return {
    _name: name,
    _employees: [],

    addEmployee: function (name, dept) {
      this._employees.push(createEmployee(name, dept));
    },

    print: function () {
      console.log(`Name: ${this._name}\nEmployees:`);
      this._employees.forEach(e => e.print());
    }
  };
}

const tesla = createCompany('tesla');
const amazon = createCompany('amazon');

console.log(tesla);
console.log(amazon);

tesla.print();
amazon.print();

// tesla._employees.push('Elon Musk');
tesla.addEmployee('Elon Musk', 'Technoking');
tesla.addEmployee('Hunter Biden', 'Lobbyist');
console.log(tesla);
tesla.print();


function createCompany2(name) {
  const employees = [];

  return {
    _name: name,

    addEmployee: function (name, dept) {
      employees.push(createEmployee(name, dept));
    },

    getEmployee(name) {
      return employees.find(e => e.name === name);
    },

    print: function () {
      console.log(`Name: ${this._name}\nEmployees:`);
      employees.forEach(e => e.print());
    }
  };
}

const ebay = createCompany2('meta');
// ebay.employees.push('Mark Zuckerback');
ebay.addEmployee('Mark Zuckerberg', 'CEO');
ebay.print();
console.log(ebay);

const alphabet = createCompany2('alphabet');
alphabet.addEmployee('sundar pichai', 'CEO');
alphabet.print();

console.log(alphabet.getEmployee('sundar pichai'));

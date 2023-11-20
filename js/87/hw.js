//(function () {
  'use strict';

  //// no prototype ////////
  const vehicleFunctions = {
    go(speed) {
      this.speed = speed;
      console.log(`now going ${speed}`);
    },
    print() {
      console.log(`${this.color} is going ${this.speed}`);
    }
  };

  function createVehicle(color) {
    const v = {
      color,
      speed: 0
    };
    Object.assign(v, vehicleFunctions);
    return v;
  }

  const planeFunctions = {
    go(speed) {
      this.speed = speed;
      console.log(`now flying ${speed}`);
    }
  };

  function createPlane(color) {
    const p = createVehicle(color);
    Object.assign(p, planeFunctions);
    return p;
  }

  const p1 = createPlane('red');
  p1.go(500);

  ///////////// prototype set up manually ////////

  /*function createVehicleP(color) {
    const v = Object.create(vehicleFunctions);
    v.color = color;
    return v;
  }*/

  const planeProto = Object.create(vehicleFunctions);
  planeProto.go = function (speed) {
    this.speed = speed;
    console.log(`now flying ${speed}`);
  };
  function createPlaneP(color) {
    const p = Object.create(planeProto);
    p.color = color;
    return p;
  }

  const p2 = createPlaneP('red');
  p2.go(500);

  ////////// constructor ///////////////

  function Vehicle(color) {
    this.color = color;
  }

  Vehicle.prototype.go = function (speed) {
    this.speed = speed;
    console.log(`now going ${speed}`);
  };
  Vehicle.prototype.print = function () {
    console.log(`${this.color} is going ${this.speed}`);
  };

  function Plane(color) {
    this.color = color;
  }

  Plane.prototype = Object.create(Vehicle.prototype);
  Plane.prototype.constructor = Plane;
  Plane.prototype.go = function (speed) {
    this.speed = speed;
    console.log(`now flying ${speed}`);
  };

  const p3 = new Plane('red');
  p3.go(500);

  /////////////// class /////////

  class Vehicle2 {
    speed = 0;

    static #numberOfVehicles = 0;
    static printNumberOfVehicles() {
      console.log(`there are ${Vehicle2.#numberOfVehicles} vehicles`);
    }

    constructor(color) {
      this.color = color;
      // this.speed = 0;

      Vehicle2.#numberOfVehicles++;
    }

    print() {
      console.log(`${this.color} is going ${this.speed}`);
    }

    go(speed) {
      this.speed = speed;
      console.log(`${this.color} now going ${this.speed}`);
    }
  }

  /*const v1 = new Vehicle2('white');
  console.log(v1);
  v1.print();
  v1.go(65);
  v1.print();*/

  class Plane2 extends Vehicle2 {
    go(speed) {
      this.speed = speed;
      console.log(`${this.color} now flying ${this.speed}`);
    }
  }

  const p4 = new Plane2('red');
  p4.go(500);
  /*console.log(p4);
  p4.go(650);
  p4.print();*/

  console.log(p1, p2, p3, p4);

  Vehicle2.printNumberOfVehicles();
//}());

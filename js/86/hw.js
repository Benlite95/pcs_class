(function () {
  'use strict';

  const vehicleFunctions = {
    go (speed) {
      this.speed = speed;
      console.log(`now going ${speed}`);
    },
    print () {
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

  const v1 = createVehicle('blue');
  v1.print();
  v1.go(50);
  v1.print();

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

  const p1 = createPlane('yellow');
  p1.go(550);
  p1.print();

  console.log(v1, p1);

  /////////////////////////////////////////////////////

  function createVehicleP(color) {
    /*const v = {
      color
    };

    //v.__proto__ = vehicleFunctions;
    Object.setPrototypeOf(v, vehicleFunctions);
    return v;*/

    const v = Object.create(vehicleFunctions);
    v.color = color;
    return v;
  }

  const vp1 = createVehicleP('green');
  vp1.go(60);
  vp1.print();

  console.log(vp1);

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

  const pp1 = createPlaneP('red');
  pp1.go(600);
  pp1.print();

  vp1.go(30);

  console.log(pp1);

  ////////////

  function Vehicle(color) {
    this.color = color;
  }

  //Vehicle.prototype = { constructor: Vehicle };

  Vehicle.prototype.go = function (speed) {
    this.speed = speed;
    console.log(`now going ${speed}`);
  };
  Vehicle.prototype.print = function() {
    console.log(`${this.color} is going ${this.speed}`);
  };
  Vehicle.prototype.clone = function () {
    const copy = new /*Vehicle*/this.constructor(this.color);
    copy.speed = this.speed;
    return copy;
  };

  //Vehicle.prototype = vehicleFunctions;

  const vc1 = new Vehicle('purple');
  console.log(vc1);
  vc1.go(25);
  vc1.print();

  function Plane(color) {
    this.color = color;
  }

  //Plane.prototype = { constructor: Plane };
  Plane.prototype = Object.create(Vehicle.prototype);
  Plane.prototype.constructor = Plane;
  Plane.prototype.go = function (speed) {
    this.speed = speed;
    console.log(`now flying ${speed}`);
  };

  const pc1 = new Plane('black');
  pc1.go(750);
  pc1.print();

  console.log(pc1);

  console.log(pc1.constructor);

  console.log('---------------------------');
  const copyV1 = vc1.clone();
  copyV1.print();
  copyV1.go(100);
  console.log(copyV1);

  const copyPc1 = pc1.clone();
  copyPc1.print();
  copyPc1.go(1000);
  console.log(copyPc1);

  //////////////////////////////

  // mixin
  function Printable() {}
  Printable.prototype.print = function () {
    console.log('Im being printed');
  };

  function Drawable() {}
  Drawable.prototype.draw = function () {
    console.log('Im being drawn');
  };

  const p = new Printable();
  p.print();

  const d = new Drawable();
  d.draw();

  function DrawableAndPrintable() {}
  DrawableAndPrintable.prototype = Object.create(Printable.prototype);
  Object.assign(DrawableAndPrintable.prototype, Drawable.prototype);

  const dp = new DrawableAndPrintable();
  dp.print();
  dp.draw();
}());

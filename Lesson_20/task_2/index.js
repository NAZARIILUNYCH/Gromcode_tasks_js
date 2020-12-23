/* eslint-disable max-classes-per-file */
'use strict';

class Vehicle {
  constructor(name, numberOfWheels) {
    this.name = name;
    this.numberOfWheels = numberOfWheels;
  }

  move() {
    console.log(`${this.name} is moving`);
  }

  stop() {
    console.log(`${this.name} stopped`);
  }
}

class Ship extends Vehicle {
  constructor(name, numberOfWheels, speed) {
    super(name, numberOfWheels);
    this.name = name;
    this.numberOfWheels = numberOfWheels;
    this.speed = speed;
  }

  move() {
    console.log(`${this.name} lifting anchor up`);
    super.move();
  }
  
  stop() {
    super.stop();
    console.log(`${this.name} lifting anchor down`);
  }
}

const vehicleFunc = new Vehicle('Argo', 0);
console.log(vehicleFunc.move());
console.log(vehicleFunc.stop());

const shipFunc = new Ship('Argo', 0, 20);
console.log(shipFunc.move());
console.log(shipFunc.stop());

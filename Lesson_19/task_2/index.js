'use strict';

const vehicle = {
  name: 'Argo',
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};

const ship = {
  name: 'VH-12',
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    this.move();
  },
  stopMachine() {
    this.stop();
    console.log(`${this.name} lifting anchor down`);
  },
};

Object.setPrototypeOf(ship, vehicle);

// input: object
// output: array
const getOwnProps = (object) => {
  const newArr = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const prop in object) {
    if(object.hasOwnProperty(prop) && typeof object[prop] !== 'function') {
      newArr.push(prop);
    }
  }

  return newArr;
}

console.log(getOwnProps(ship)); // ['name']

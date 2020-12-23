'use strict';

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(newAge) {
    if (newAge < 0) {
      return false;
    }

    if (newAge >= 25) {
      this.age = newAge;
      this.requestNewPhoto();
    }

    this.age = newAge;
    return this.age;
  }

  static createEmpty() {
    return new this('', null);
  }
}

const user1 = new User('John', 18);
console.log(user1.requestNewPhoto());
console.log(user1.setAge(43)); // requestNewPhoto, 43
console.log(user1.setAge(-2)); // false
console.log(user1.setAge(5)); // 5
console.log(User.createEmpty());

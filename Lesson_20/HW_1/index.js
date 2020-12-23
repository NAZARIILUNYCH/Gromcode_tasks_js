/* eslint-disable no-useless-constructor */
'use strict';

class Order {
  constructor(price, city, type) {
    this.id = Math.random().toString();
    this.price = price;
    this.dateCreated = new Date();
    this.isConfirmed = false;
    this.dateConfirmed = '';
    this.city = city;
    this.type = type;
  }

  checkPrice() {
    return this.price > 1000;
  }

  confirmOrder() {
    if (this.isConfirmed === false) {
      this.isConfirmed = true;
      this.dateConfirmed = new Date();
    }
  }

  isValidType() {
    if (this.type === 'Buy' || this.type === 'Sell') {
      return true;
    }

    return false;
  }
}

const orderFunc = new Order(1200, 'Lviv', 'Buy');
console.log(orderFunc.id);
console.log(orderFunc.price); // 1200
console.log(orderFunc.city); // Lviv
console.log(orderFunc.type); // car
console.log(orderFunc.checkPrice()); // true
console.log(orderFunc.isValidType());

'use strict';

class Wallet {
  constructor() {
    this._balance = 0;
  }

  getBalance() {
    return this._balance;
  }

  deposit(amount) {
    this._balance += amount;
  }

  withdraw(amount) {
    if (amount > this._balance) {
      console.log('No enough funds');
      return;
    }

    this._balance -= amount;
  }
}

const walletFunc = new Wallet();
console.log(walletFunc.getBalance());
console.log(walletFunc.deposit(42));
console.log(walletFunc.withdraw(24));
console.log(walletFunc.getBalance());
console.log(walletFunc.withdraw(23));

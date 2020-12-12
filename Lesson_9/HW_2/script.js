'use strict';

const dayTransactions = [
  { userId: 22, amount: 60, operation: 'sell' },
  { userId: 22, amount: 160, operation: 'buy' },
  { userId: 44, amount: 90, operation: 'sell' },
];

// input: array
// output: number
function getTotalRevenue(arr) {
  let result = arr.map(el => el.amount).reduce((a, b) => a + b);
  
  return result;
}

console.log(getTotalRevenue(dayTransactions)); // result = 310
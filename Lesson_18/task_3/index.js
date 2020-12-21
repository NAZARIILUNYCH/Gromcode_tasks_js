'use strict';

// input: array
// output: number
function sumOfSquares() {
  return [...arguments].reduce((acc, elem) => {
    return acc + (elem * elem);
  }, 0)
}

console.log(sumOfSquares(4, 9, 2, 5)); // 126

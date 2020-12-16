import {reverseArray, withdraw, getAdults} from './index.js';

// task 1
it('should return null if is not array', () => {
  const result = reverseArray('Hello!');

  expect(result).toEqual(null);
})

it('should return reverse array', () => {
  const result = reverseArray([1, 2, 3, 4, 5, 6]);

  expect(result).toEqual([6, 5, 4, 3, 2, 1]);
})

it('should return reverse array', () => {
  const result = reverseArray(['h', 'e', 'l', 'l', 'o']);

  expect(result).toEqual(['o', 'l', 'l', 'e', 'h']);
})


// task 2
it('should return -1, if amount is bigger than balances', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 100);

  expect(result).toEqual(-1);
})

it('should return your value', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);

  expect(result).toEqual(37);
})

it('should return your value', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 25);

  expect(result).toEqual(-1);
})


// task 3
it('should return an empty object', () => {
  const result = getAdults({});

  expect(result).toEqual({});
})

it('should return people, they are 18 years old, and bigger', () => {
  const result = getAdults({ 'John Doe': 19, 'Tom': 17, 'Bob': 18 });

  expect(result).toEqual({ 'John Doe': 19, 'Bob': 18 });
})

it('should return people, they are 18 years old, and bigger', () => {
  const result = getAdults({ 'Ivan': 12, 'Oleh': 17, 'Roman': 14 });

  expect(result).toEqual({});
})
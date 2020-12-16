import {getMinSquaredNum} from './getMinSquaredNumber.js';

it('should withdraw null', () => {
  const result = getMinSquaredNum([]);

  expect(result).toEqual(null);
})

it('should withdraw string', () => {
  const result = getMinSquaredNum('Hello');

  expect(result).toEqual(null);
})

it('should get minimal abs number', () => {
  const result = getMinSquaredNum([-777, 3, -2, 6, 45, -20]);

  expect(result).toEqual(4);
})
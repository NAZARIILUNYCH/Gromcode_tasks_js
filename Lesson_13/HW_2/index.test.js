import {calc} from './calculator.js';

it('should return null if expression is not string', () => {
  const result = calc([]);

  expect(result).toEqual(null);
})


it('should return sum', () => {
  const result = calc('18 + 32');

  expect(result).toEqual('18 + 32 = 50');
}) 


it('should return difference', () => {
  const result = calc('12 - 6');

  expect(result).toEqual('12 - 6 = 6');
}) 


it('should return multiply', () => {
  const result = calc('8 * 6');

  expect(result).toEqual('8 * 6 = 48');
}) 


it('should return division', () => {
  const result = calc('42 / 7');

  expect(result).toEqual('42 / 7 = 6');
}) 
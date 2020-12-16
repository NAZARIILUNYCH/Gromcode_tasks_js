import {getMinSquaredNum} from './getMinSquaredNumber.js';

it('should get minimal module squared number', () => {
  const result = getMinSquareNum([-777, 3, -2, 6, 45, -20]);

  expect(result).toEqual(4);
})
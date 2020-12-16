'use strict';

// input: array
// output: number
// eslint-disable-next-line no-unused-vars
export const getMinSquaredNum = arr => {
  const newArr = arr.map(el => Math.abs(el) * Math.abs(el));

  if (!Array.isArray(arr) || arr === []) return null;

  return Math.min(...newArr);
}

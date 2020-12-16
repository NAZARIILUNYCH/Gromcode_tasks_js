'use strict';

// input: array
// output: number
// eslint-disable-next-line no-unused-vars
export const getMinSquaredNum = arr => {
  if (!Array.isArray(arr) || arr.length === 0) return null;

  const newArr = arr.map(el => Math.abs(el) * Math.abs(el));

  return Math.min(...newArr);
}
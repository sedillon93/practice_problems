'use strict';
const greatestMatrixSum = require('./greatestSuminMatrix');

describe(`greatestMatrixSum`, () => {
  test(`greatestMatrixSum should return the largest sum of X digits from a given matrix; sum can be horizontal, vertical, or diagonal direction`, () => {
    let matrix = [[1,2,3,4], [1,2,3,4], [4,3,2,1], [4,3,2,1]];
    expect(greatestMatrixSum(matrix, 2)).toBe(8);
  });

  test(`greatestMatrixSum should return the largest sum of X digits from a given matrix; sum can be horizontal, vertical, or diagonal direction`, () => {
    let matrix = [[1,2,3,4], [8,3,6,7], [2,0,9,5], [4,3,2,1]];
    expect(greatestMatrixSum(matrix, 4)).toBe(24);
  });
});


/*
  1 2 3 4
  8 3 6 7
  2 0 9 5
  4 3 2 1
*/

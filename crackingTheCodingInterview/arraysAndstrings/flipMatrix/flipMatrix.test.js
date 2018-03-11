'use strict';

const flipMatrix = require(`./flipMatrix`);

describe(`flipMatrix`, () => {
  test(`flipMatrix should rotate a 2D array 90 degrees clockwise`, () => {
    let testMatrix = [[1,2,3], [4,5,6], [7,8,9]];
    expect(flipMatrix(testMatrix)).toEqual([[7,4,1], [8,5,2], [9,6,3]]);
  });
});

/*
1 2 3       7 4 1
4 5 6       8 5 2
7 8 9       9 6 3
*/

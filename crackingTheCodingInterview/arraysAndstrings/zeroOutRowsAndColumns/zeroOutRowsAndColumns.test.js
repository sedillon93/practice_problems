'use strict';

const zeroOut = require(`./zeroOutRowsAndColumns`);

describe(`zeroOutRowsAndColumns`, () => {
  test(`zeroOutRowsAndColumns should make all elements sharing a row or column with a zero element 0 as well`, () => {
    let testMatrix = [[1,2,7,0,4], [3,0,1,11,4], [5,5,7,0,3], [3,2,9,1,4]];
    expect(zeroOut(testMatrix)).toEqual([[0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [3,0,9,0,4]]);
  });
});

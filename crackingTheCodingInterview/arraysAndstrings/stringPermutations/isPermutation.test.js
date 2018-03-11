'use strict';
const isPermutation = require(`./isPermutation`);

describe(`isPermutation`, () => {
  test(`should return true if strings are permutations`, () => {
    expect(isPermutation('banana', 'ananab')).toBeTruthy;
  });

  test(`should return false if strings are not permutations`, () => {
    expect(isPermutation('banana', 'ababan')).toBeFalsey;
  });
});

'use strict';
const allUniqueChars = require(`./uniqueChars`);

describe(`all unique chars`, () => {
  test(`allUniqueChars should return false if there are duplicate values`, () => {
    expect(allUniqueChars('blaha')).toBeFalsey;
    expect(allUniqueChars('whatdkue')).toBeTruthy;
  });
});

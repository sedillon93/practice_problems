'use strict';
const arrayIntoBST = require('./arrayIntoBST');

describe(`arrayIntoBST`, () => {
  test(`arrayIntoBST should take a sorted array and create a binary search tree with minimal height`, () => {
    let sortedArray = [1,2,3,4,5,6,7];
    let testTree = arrayIntoBST(sortedArray, 0, sortedArray.length - 1);
    expect(arrayIntoBST(sortedArray, 0, sortedArray.length - 1)).toBeTruthy;
  });
});

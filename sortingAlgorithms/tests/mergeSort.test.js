'use strict';

const mergeSort = require(`../algorithms/mergeSort`);

describe(`merge sort`, () => {
  test(`merge sort should sort the array in place from smallest to largest`, () => {
    let testArray = [9,6,2,5,9,4,7];
    // let testArray = [4,2];
    let sortedArray = mergeSort(testArray);
    // expect(sortedArray).toEqual([2,4]);
    expect(sortedArray).toEqual([2,4,5,6,7,9,9]);
  });
});

const binarySearch = require(`./binarySearch`);

describe(`binarySearch`, () => {
  test(`binary search should return the index of an element if it's in the sorted collection and -1 if it's not`, () => {
    let sortedArray = [2,6,9,11,15,21,33,47,92];
    expect(binarySearch(sortedArray, 21, 0, sortedArray.length - 1)).toEqual(5);
    expect(binarySearch(sortedArray, 13, 0, sortedArray.length - 1)).toEqual(-1);
  });
});

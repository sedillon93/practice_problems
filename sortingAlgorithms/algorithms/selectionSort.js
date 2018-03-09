'use strict';
// find the smallest number and swap it with the 0th element; then find 2nd smallest and swap with 1st element; continue until all are placed
// [7,3,2,5,4,9]
const selectionSort = (collection) => {
  for(let n = 0; n < collection.length; n++){

    for (let i = n; i < collection.length; i++){
      let currentSmallest = collection[n];
      let indexOfSmallest = n;
      if(collection[i] < currentSmallest){
        currentSmallest = collection[i];
        indexOfSmallest = i;
      }
      if(indexOfSmallest !== n){
        _swapValues(collection, indexOfSmallest, n);
      }
    }
  }
  return collection;
};

const _swapValues = (collection, index1, index2) => {
  let tempIndex1Value = collection[index1];
  collection[index1] = collection[index2];
  collection[index2] = tempIndex1Value;
};

module.exports = selectionSort;

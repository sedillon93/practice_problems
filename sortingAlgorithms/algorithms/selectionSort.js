'use strict';

const selectionSort = (collection) => {
  for(let n = 0; n < collection.length - 2; n++){
    for (let i = n + 1; i < collection.length; i++){
      let currentSmallest = collection[n];
      let indexOfSmallest = n;
      if(collection[i] < currentSmallest){
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

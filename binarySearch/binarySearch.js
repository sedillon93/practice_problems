'use strict';

const binarySearch = (collection, valueToFind, leftIndex, rightIndex) => {
  let middle = Math.floor((rightIndex + leftIndex) / 2);
  let foundValue = collection[middle];
  if (valueToFind === foundValue){
    return middle;
  }else if(valueToFind > foundValue && middle + 1 <= rightIndex){
    return binarySearch(collection, valueToFind, middle + 1, rightIndex);
  }else if(valueToFind < foundValue && leftIndex <= middle - 1){
    return binarySearch(collection, valueToFind, leftIndex, middle - 1);
  }else {
    return -1;
  }
};

module.exports = binarySearch;

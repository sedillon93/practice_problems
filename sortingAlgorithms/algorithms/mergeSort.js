'use strict';
/*
  [8,2,5,3,9,5,4]
  1) divide collection in halves until each half is only 1 element
  2) combine the two halves, sorting as you recombine
*/

const mergeSort = (collection) => {
  let results = [];
  if (collection.length < 2){
    return collection;
  }

  let middleIndex = Math.floor(collection.length / 2);
  let leftHalf = mergeSort(collection.slice(0, middleIndex));
  let rightHalf = mergeSort(collection.slice(middleIndex));

  let i = 0;
  let j = 0;

  while(i < leftHalf.length || j < rightHalf.length){
    if(i >= leftHalf.length && j < rightHalf.length){
      results = results.concat(rightHalf.slice(j));
      break;
    }else if(i < leftHalf.length && j >= rightHalf.length){
      results = results.concat(leftHalf.slice(i));
      break;
    }else if(leftHalf[i] > rightHalf[j]){
      results.push(rightHalf[j]);
      j++;
    }else {
      results.push(leftHalf[i]);
      i++;
    }
  }

  // while(leftHalf.length || rightHalf.length){
  //   if(!leftHalf.length && rightHalf.length){
  //     results = results.concat(rightHalf);
  //     break;
  //   }else if(leftHalf.length && !rightHalf.length){
  //     results = results.concat(leftHalf);
  //     break;
  //   }else if(leftHalf[0] < rightHalf[0]){
  //     let element = leftHalf.shift();
  //     results.push(element);
  //   }else {
  //     let element = rightHalf.shift();
  //     results.push(element);
  //   }
  // }
  return results;
};

module.exports = mergeSort;

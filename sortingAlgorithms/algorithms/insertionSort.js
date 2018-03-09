'use strict';
// break into sorted & unsorted parts, then move 1 item at a time from unsorted section to correct place in sorted section
// [7,3,2,5,4,9]
const insertionSort = (collection) => {
  for (let i = 1; i < collection.length; i++){
    let valueToInsert = collection[i];
    let holePosition = i;

    while(valueToInsert < collection[holePosition - 1] && holePosition > 0){
      collection[holePosition] = collection[holePosition - 1];
      holePosition--;
    }
  }
  return collection;
};

module.exports = insertionSort;

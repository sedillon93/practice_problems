'use strict';

const removeDuplicates = (headNode) => {
  let visitedValues = {};
  let list = headNode;

  while(list.next !== null){
    visitedValues[list.value] = true;
    if(visitedValues[list.next.value]){
      list.next = list.next.next;
    }
    list = list.next;
  }

  return headNode;
};

module.exports = removeDuplicates;

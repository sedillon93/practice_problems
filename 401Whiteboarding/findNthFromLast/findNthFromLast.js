'use strict';

const findNthFromLast = (listNode, n) => {
  let gapPointer = listNode;
  for(let i = 0; i < n; i++){
    gapPointer = gapPointer.next;
  }

  let itemToReturn = listNode;
  while(gapPointer.next){
    gapPointer = gapPointer.next;
    itemToReturn = itemToReturn.next;
  }

  return itemToReturn;
};

module.exports = findNthFromLast;

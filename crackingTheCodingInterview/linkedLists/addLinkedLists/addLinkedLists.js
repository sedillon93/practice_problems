'use strict';
const SinglyLinkedList = require('../singlyLinkedList');
/* Given two numbers represented as linked lists, where digits are in reverse order (ones place is first), add the two numbers and return the sum as a linked list in proper order
i.e.       1 -> 3 -> 2   +   2 -> 4 -> 6  =   8 -> 7 -> 3
*//*
add the numbers from list1.node1 and list2.node1; save the ones digit and carry the tens value to the next addition
so node.value = carriedValue + list1.nodeX.value + list2.nodeX.value
*/

const addLinkedLists = (list1Node, list2Node) => {
  // nodeSums = [2,6,1]
  let nodeSums = _sumEachNode(list1Node, list2Node, 0, []);
  let newNode = new SinglyLinkedList(nodeSums.shift());


  while(nodeSums.length > 0){
    newNode.appendNode(nodeSums.shift());
  }
  return newNode;
};

const _sumEachNode = (node1, node2, carriedValue, calculatedNodeSums) => {
  if(!node1 && !node2){
    return calculatedNodeSums;
  }

  let sum = carriedValue;
  if(node1.value){
    sum += node1.value;
  }
  if(node2.value){
    sum += node2.value;
  }

  let value = sum % 10;
  let nextCarried = 0;
  sum > 10 ? nextCarried = 1 : nextCarried = 0;
  calculatedNodeSums.unshift(value);
  let finalArray = _sumEachNode(node1.next, node2.next, nextCarried, calculatedNodeSums);
  return finalArray;
};

module.exports = addLinkedLists;

'use strict';
// remove the middle node of a singly linked list given access only to that node
// i.e. given node '3' list 1 -> 2 -> 3 -> 4 -> 5 becomes 1 -> 2 -> 4 -> 5
// copy the next node's information into current node; delete next node

const removeMiddleNode = (node) => {
  node.value = node.next.value;
  let nodeToDelete = node.next;
  node.next = node.next.next;

  deleteNode(nodeToDelete);
};

module.exports = removeMiddleNode;

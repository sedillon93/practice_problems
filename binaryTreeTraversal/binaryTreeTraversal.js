'use strict';

const binaryTreeTraversals = module.exports = {};

binaryTreeTraversals.inOrder = (node) => {
  if(node.left){
    binaryTreeTraversals.inOrder(node.left);
  }
  console.log(node.value);
  if(node.right){
    binaryTreeTraversals.inOrder(node.right);
  }
};


binaryTreeTraversals.preOrder = () => {};
binaryTreeTraversals.postOrder = () => {};
binaryTreeTraversals.breadthFisrt = () => {};
binaryTreeTraversals.depthFirst = () => {};

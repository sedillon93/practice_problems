'use strict';

const binaryTreeTraversal = module.exports = {};

binaryTreeTraversal.inOrder = (node) => {
  if(node.left){
    binaryTreeTraversal.inOrder(node.left);
  }
  console.log(node.value);
  if(node.right){
    binaryTreeTraversal.inOrder(node.right);
  }
};


binaryTreeTraversal.preOrder = (node) => {
  console.log(node.value);
  if(node.left){
    binaryTreeTraversal.preOrder(node.left);
  }
  if(node.right){
    binaryTreeTraversal.preOrder(node.right);
  }
};

binaryTreeTraversal.postOrder = (node) => {
  if(node.left){
    binaryTreeTraversal.postOrder(node.left);
  }
  if(node.right){
    binaryTreeTraversal.postOrder(node.right);
  }
  console.log(node.value);
};

binaryTreeTraversal.breadthFirst = (node) => {
  
};

binaryTreeTraversal.depthFirst = (node) => {};

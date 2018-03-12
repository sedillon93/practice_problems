'use strict';
const TreeNode = require('../binaryTreeConstructor');

const arrayIntoBST = (sortedArray, leftIndex, rightIndex) => {
  let middle = Math.floor((leftIndex + rightIndex) / 2);
  let node = new TreeNode(sortedArray[middle]);
  if(leftIndex <= middle - 1){
    node.left = arrayIntoBST(sortedArray, leftIndex, middle - 1);
  }else {
    node.left = null;
  }
  if(rightIndex >= middle + 1){
    node.right = arrayIntoBST(sortedArray, middle + 1, rightIndex);
  }else {
    node.right = null;
  }
  return node;
};

module.exports = arrayIntoBST;

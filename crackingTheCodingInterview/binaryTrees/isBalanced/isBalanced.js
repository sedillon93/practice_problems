'use strict';

const isBalanced = (root) => {
  let queue = [];
  let leftHeight = 0;
  let rightHeight = 0;
  let numOfChildren = 0;

  queue.push(root);
  while(queue.length > 0){
    numOfChildren = queue.length;
    for(let i = 0; i < numOfChildren; i++){
      let parent = queue.shift();
      if(parent.left){
        leftHeight = _findHeight(parent.left, 1);
        queue.push(parent.left);
      }
      if(parent.right){
        rightHeight = _findHeight(parent.right, 1);
        queue.push(parent.right);
      }
      if(Math.abs(rightHeight - leftHeight) > 1){
        return false;
      }
    }
  }
  return true;
};

const _findHeight = (node, height) => {
  let leftSubtreeHeight = 0;
  let rightSubtreeHeight = 0;
  if(node.left){
    leftSubtreeHeight = _findHeight(node.left, height++);
  }
  if(node.right){
    rightSubtreeHeight = _findHeight(node.right, height++);
  }
  if(leftSubtreeHeight !== 0 || rightSubtreeHeight !== 0){
    if(leftSubtreeHeight > rightSubtreeHeight){
      return leftSubtreeHeight;
    }else {
      return rightSubtreeHeight;
    }
  }else {
    return height;
  }
};

module.exports = isBalanced;

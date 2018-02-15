'use strict';

function TreeNode(value, left, right){  // left & right will be 'undefined' if no parameters are passed in during construction
  this.value = value;
  this.left = left;
  this.right = right;
}

function BinarySearchTree(){
  this.root = null;
}

BinarySearchTree.prototype.insertNode = function(nodeValue){
  if(this.root === null){
    this.root = new TreeNode(nodeValue);
  }
  _insertNode(this.root, nodeValue);
};

BinarySearchTree.prototype.findNode = function(nodeValue){
  _findNode(this.root, nodeValue);
};

/* ---------------------------------------------------------------------------
                            Helper Functions
   ---------------------------------------------------------------------------
*/
const _insertNode = function(parent, nodeToInsert){
  if(parent.value > nodeToInsert.value){
    if(!parent.left){
      parent.left = new TreeNode(nodeToInsert);
      return;
    }else{
      _insertNode(parent.left, nodeToInsert);
      return;
    }
  }else if(parent.value < nodeToInsert.value){
    if(!parent.right){
      parent.right = new Node(nodeToInsert);
      return;
    }else{
      _insertNode(parent.right, nodeToInsert);
      return;
    }
  }else{
    throw new Error(`A node with that value already exists; no duplicate values are allowed`);
  }
};

const _findNode = function(currentNode, valueToFind){
  if(currentNode === null){
    return null;
  }else if(currentNode.value === valueToFind){
    return currentNode;
  }else if(currentNode.value > valueToFind){
    return _findNode(currentNode.left, valueToFind);
  }else {
    return _findNode(currentNode.right, valueToFind);
  }
};

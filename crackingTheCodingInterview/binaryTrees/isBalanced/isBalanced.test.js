'use strict';
const isBalanced = require('./isBalanced');
const binaryTree = require('../binaryTreeConstructor');

describe(`check if binary tree is balanced`, () => {
  test(`isBalanced should return true if no node's subtrees have heights off by more than 1`, () => {
    let balancedTree = new binaryTree();
    balancedTree.insertNode(9);
    expect(isBalanced(balancedTree)).toBeTruthy;
  });

  test(`isBalanced should return true if no node's subtrees have heights off by more than 1`, () => {
    let balancedTree = new binaryTree();
    balancedTree.insertNode(8);
    balancedTree.insertNode(3);
    balancedTree.insertNode(11);
    expect(isBalanced(balancedTree)).toBeTruthy;
  });

  test(`isBalanced should return true if no node's subtrees have heights off by more than 1`, () => {
    let balancedTree = new binaryTree();
    balancedTree.insertNode(8);
    balancedTree.insertNode(5);
    balancedTree.insertNode(11);
    balancedTree.insertNode(1);
    balancedTree.insertNode(2);
    expect(isBalanced(balancedTree)).toBeFalsey;
  });

  test(`isBalanced should return true if no node's subtrees have heights off by more than 1`, () => {
    let balancedTree = new binaryTree();
    balancedTree.insertNode(8);
    balancedTree.insertNode(5);
    balancedTree.insertNode(11);
    balancedTree.insertNode(13);
    balancedTree.insertNode(1);
    balancedTree.insertNode(2);
    expect(isBalanced(balancedTree)).toBeFalsey;
  });
});

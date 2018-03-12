'use strict';

const findNthFromLast = require('./findNthFromLast');
const singlyLinkedList = require('../singlyLinkedList');

describe(`findNthFromLast`, () => {
  test(`findNthFromLast should return a node at the designated location`, () => {
    let linkedList = new singlyLinkedList(5);
    linkedList.appendNode(9);
    linkedList.appendNode(2);
    expect(findNthFromLast(linkedList, 1).value).toEqual(9);
  });
});

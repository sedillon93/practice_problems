'use strict';

const removeDuplicates = require('./removeDuplicates');
const singlyLinkedList = require('../singlyLinkedList');

describe(`removeDuplicates- singlyLinkedList`, () => {
  test(`removeDuplicates should remove all duplicate node values and return the altered list`, () => {
    let listWithDuplicates = new singlyLinkedList(5);
    listWithDuplicates.appendNode(3);
    listWithDuplicates.appendNode(5);
    listWithDuplicates.appendNode(4);
    listWithDuplicates.appendNode(2);
    let newList = removeDuplicates(listWithDuplicates);
    expect(newList.next.next.next.value).toEqual(2);
  });
});

// 5 -> 3 -> 5 -> 4 -> 2

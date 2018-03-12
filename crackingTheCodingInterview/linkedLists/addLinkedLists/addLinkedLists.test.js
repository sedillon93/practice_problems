'use strict';
const addLinkedLists = require('./addLinkedLists');
const SinglyLinkedList = require('../singlyLinkedList');

describe(`addLinkedLists`, () => {
  test(`addLinkedLists should add two numbers represented as linked lists (in reverse order) and return their sum as a linked list (in normal order)`, () => {
    let linkedList1 = new SinglyLinkedList(2);
    linkedList1.appendNode(4);
    linkedList1.appendNode(3);
    let linkedList2 = new SinglyLinkedList(1);
    linkedList2.appendNode(2);
    linkedList2.appendNode(5);
    expect(addLinkedLists(linkedList1, linkedList2).value).toBe(8);
    expect(addLinkedLists(linkedList1, linkedList2).next.value).toBe(6);
    expect(addLinkedLists(linkedList1, linkedList2).value.next.next).toBe(3);
  });
});

// 243 (i.e. 342) + 125 (i.e. 521)  =  863

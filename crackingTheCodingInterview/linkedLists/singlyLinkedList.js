'use strict';

class SinglyLinkedList{
  constructor(value){
    this.value = value;
    this.next = null;
  }

  appendNode(value){
    if(!this.next){
      this.next = new SinglyLinkedList(value);
    }else {
      this.next.appendNode(value);
    }

    return this;
  }
}

module.exports = SinglyLinkedList;

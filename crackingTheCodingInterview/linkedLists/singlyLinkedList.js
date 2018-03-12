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

  deleteNode(value){
    if(this.value === value){
      console.log('woops, trying to delete the first node :/');  
    }else if(this.next === null){
      return null;
    }else if(this.next.value === value){
      this.next = this.next.next;
    }else {
      this.next.deleteNode(value);
    }
    return this;
  }
}

module.exports = SinglyLinkedList;

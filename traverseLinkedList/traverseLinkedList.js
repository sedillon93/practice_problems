`Part 1:
Represent a Singly Linked list using an object literal.

Part 2:
Write a function const traverse = (list) => {... to traverse a linked list printing each node's value.`;

function SinglyLinkedList(value){
  this.value = value;
  this.next = null;
}

const traverse = (linkedListNode) => {
  if (linkedListNode){
    console.log(linkedListNode.value);
  }
  if(linkedListNode){
    traverse(linkedListNode.next);
  }
  return;
};

module.exports = SinglyLinkedList;

// `OR`

// const traverse = (linkedListNode) => {
//   while(linkedListNode){
//     print(linkedListNode.value);
//     linkedListNode = linkedListNode.next;
//   }
// }

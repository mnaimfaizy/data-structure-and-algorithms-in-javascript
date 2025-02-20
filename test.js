const DoublyLinkedList = require("./DoublyLinkedList");

const myDoublyLinkedList = new DoublyLinkedList(0);
myDoublyLinkedList.push(1);
myDoublyLinkedList.push(2);
myDoublyLinkedList.push(3);

console.log("Get the 2 element: ", myDoublyLinkedList.get(1).value);
console.log("Get the 3 element: ", myDoublyLinkedList.get(2).value);

myDoublyLinkedList.set(1, 10);
console.log("Get the 2 element after set: ", myDoublyLinkedList.get(1).value);

myDoublyLinkedList.insert(2, 20);
console.log(
  "Get the 3 element after insert: ",
  myDoublyLinkedList.get(2).value
);

console.log("List before removing the item: ", myDoublyLinkedList);
myDoublyLinkedList.remove(1);
console.log("Remove the item in index 1: ", myDoublyLinkedList);

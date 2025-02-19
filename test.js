const DoublyLinkedList = require("./DoublyLinkedList");

const myDoublyLinkedList = new DoublyLinkedList(10);
console.log(myDoublyLinkedList);

myDoublyLinkedList.push(20);
console.log(myDoublyLinkedList);

myDoublyLinkedList.pop();
console.log("After 1 time pop: ", myDoublyLinkedList);

myDoublyLinkedList.pop();
console.log("After 2 times pop: ", myDoublyLinkedList);

myDoublyLinkedList.pop();
console.log("If we have no elements: ", myDoublyLinkedList);

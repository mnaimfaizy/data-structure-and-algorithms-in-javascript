const DoublyLinkedList = require("./DoublyLinkedList");

const myDoublyLinkedList = new DoublyLinkedList(10);
console.log(myDoublyLinkedList);

myDoublyLinkedList.push(20);
console.log(myDoublyLinkedList);

myDoublyLinkedList.unshift(5);
console.log("Unshifted:", myDoublyLinkedList);

myDoublyLinkedList.shift();
console.log("Shifted:", myDoublyLinkedList);

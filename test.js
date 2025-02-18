const list = require("./LinkedList.js");

const linkedList = list.linkedList;
linkedList.push(1);
linkedList.push(2);
linkedList.push(3);
linkedList.push(4);
linkedList.push(5);

console.log("Middle element odd:", linkedList.findMiddle());
linkedList.push(6);
console.log("Link list after push(6):", linkedList);
console.log("Middle element even:", linkedList.findMiddle());

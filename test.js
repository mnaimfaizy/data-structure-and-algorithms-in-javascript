const BST = require("./BinarySearchTree.js");

const tree = new BST();
tree.rInsert(10);
tree.rInsert(5);
tree.rInsert(15);

console.log(tree.rContains(5)); // true
console.log(tree.rContains(15)); // true
console.log(tree.rContains(20)); // false

tree.delete(5);
console.log(tree);

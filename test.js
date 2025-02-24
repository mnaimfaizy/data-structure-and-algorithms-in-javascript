const BST = require("./BinarySearchTree.js");

const tree = new BST();
tree.rInsert(10);
tree.rInsert(5);
tree.rInsert(15);
tree.rInsert(3);
tree.rInsert(7);
tree.rInsert(13);
tree.rInsert(17);

console.log(tree.rContains(5)); // true
console.log(tree.rContains(15)); // true
console.log(tree.rContains(20)); // false

console.log(tree);

// Breath First Search
console.log(tree.BFS()); // [10, 5, 15, 3, 7, 13, 17]

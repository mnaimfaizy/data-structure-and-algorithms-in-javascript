const BST = require("./BinarySearchTree");

// Create a new instance of the BST class
let bst = new BST();

// Insert some nodes
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);

// Print the tree
console.log(bst.root);
// Output: Node {
//   data: 10,
//   left: Node { data: 5, left: Node { data: 2, left: null, right: null }, right: null },
//   right: Node { data: 15, left: null, right: null }
// }

// Check if the tree contains a value
console.log(bst.contains(2)); // true
console.log(bst.contains(20)); // false

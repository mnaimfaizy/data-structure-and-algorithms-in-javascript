class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(data) {
    // Create a new node
    let newNode = new Node(data);

    // If the tree is empty, then the new node will be the root
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      // If the tree is not empty, then we need to find the correct place to insert the new node
      // We start from the root and move down the tree
      let temp = this.root;

      // We will keep moving down the tree until we find the correct place to insert the new node
      while (true) {
        // If the data of the new node is equal to the data of the current node, then we return undefined
        // because we do not allow duplicate nodes in the tree
        if (temp.data === data) return undefined;
        // If the data of the new node is less than the data of the current node, then we move to the left
        // If the left of the current node is null, then we insert the new node here
        if (temp.data > data) {
          if (temp.left === null) {
            temp.left = newNode;
            return this;
          }
          temp = temp.left;
        }
        // If the data of the new node is greater than the data of the current node, then we move to the right
        // If the right of the current node is null, then we insert the new node here
        else {
          if (temp.right === null) {
            temp.right = newNode;
            return this;
          }
          temp = temp.right;
        }
      }
    }
  }

  contains(value) {
    // If the tree is empty, then return false
    if (this.root === null) return false;

    // Start from the root and move down the tree
    let temp = this.root;

    // Keep moving down the tree until we find the node with the value we are looking for
    while (temp) {
      // If the value is less than the data of the current node, then move to the left
      if (value < temp.data) {
        temp = temp.left;
      }
      // If the value is greater than the data of the current node, then move to the right
      else if (value > temp.data) {
        temp = temp.right;
      }
      // If the value is equal to the data of the current node, then return true
      else {
        return true;
      }
    }

    // If we reach this point, then the value is not in the tree
    return false;
  }

  rContains(value, currentNode = this.root) {
    if (currentNode === null) return false;
    if (currentNode.data === value) return true;

    if (value < currentNode.data) {
      return this.rContains(value, currentNode.left);
    } else {
      return this.rContains(value, currentNode.right);
    }
  }

  #rInsert(data, currentNode = this.root) {
    if (currentNode === null) {
      return new Node(data);
    }

    if (data < currentNode.data) {
      currentNode.left = this.#rInsert(data, currentNode.left);
    } else if (data > currentNode.data) {
      currentNode.right = this.#rInsert(data, currentNode.right);
    }
    return currentNode;
  }

  rInsert(data) {
    if (this.root === null) this.root = new Node(data);
    this.#rInsert(data);
  }
}

module.exports = BST;

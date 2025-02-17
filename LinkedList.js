class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = this.head;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      this.length++;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
  }
}

const list = new LinkedList();
console.log("Initial list:", list);
list.push(1);
console.log("List after push(1):", list);
list.push(2);
console.log("List after push(2):", list);
list.push(3);
list.push(4);
list.push(5);
console.log("List after push(3, 4, 5):", list);

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

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
    } else {
      let newTail = current;
      while (current.next) {
        newTail = current;
        current = current.next;
      }
      this.tail = newTail;
      this.tail.next = null;
      this.length--;
    }

    return current;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      this.length++;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    }
  }

  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
    } else {
      this.head = currentHead.next;
      this.length--;
    }

    return currentHead;
  }
}

const list = new LinkedList();
/* ----------------- Test push method ----------------- */
console.log("Initial list:", list);
list.push(1);
console.log("List after push(1):", list);
list.push(2);
console.log("List after push(2):", list);
list.push(3);
list.push(4);
list.push(5);
console.log("List after push(3, 4, 5):", list);

/* ----------------- Test pop method ----------------- */
list.pop();
console.log("List after pop():", list);
list.pop();
list.pop();
list.pop();
console.log("List after pop() 3 times:", list);
list.pop();
console.log("List after pop() 1 more time:", list);

/* ----------------- Test unshift method ----------------- */
list.unshift(1);
console.log("List after unshift(1):", list);
list.unshift(2);
console.log("List after unshift(2):", list);

/* ----------------- Test shift method ----------------- */
list.shift();
console.log("List after shift():", list);
list.shift();
console.log("List after shift() 1 more time:", list);

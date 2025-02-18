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

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }

    return current;
  }

  set(index, value) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    current.value = value;

    return this;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return null;
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);

    const newNode = new Node(value);
    let current = this.head;
    let counter = 0;
    while (counter !== index - 1) {
      current = current.next;
      counter++;
    }
    newNode.next = current.next;
    current.next = newNode;
    this.length++;

    return this;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let current = this.head;
    let counter = 0;
    while (counter !== index - 1) {
      current = current.next;
      counter++;
    }
    let removed = current.next;
    current.next = removed.next;
    this.length--;

    return removed;
  }

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp.next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }

    return this;
  }

  findMiddle() {
    let slow = this.head;
    let fast = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow;
  }

  hasLoop() {
    let slow = this.head;
    let fast = this.head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) return true;
    }

    return false;
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

/* ----------------- Test get method ----------------- */
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
console.log("List after push(1, 2, 3, 4, 5):", list);
console.log("Get 0th element:", list.get(0));
console.log("Get 1st element:", list.get(1));

/* ----------------- Test set method ----------------- */
list.set(0, 10);
console.log("List after set(0, 10):", list);
list.set(3, 40);
console.log("List after set(3, 40):", list.get(3));

/* ----------------- Test insert method ----------------- */
list.insert(0, 1);
console.log("List after insert(0, 1):", list);
list.insert(2, 3);
console.log("List after insert(2, 3):", list);

/* ----------------- Test remove method ----------------- */
list.remove(0);
console.log("List after remove(0):", list);
list.remove(1);
console.log("List after remove(1):", list);

/* ----------------- Test reverse method ----------------- */
list.reverse();
console.log("List after reverse():", { list });

/* ----------------- Test findMiddle method ----------------- */
const linkedList = new LinkedList();
linkedList.push(1);
linkedList.push(2);
linkedList.push(3);
linkedList.push(4);
linkedList.push(5);

console.log("Middle element odd:", linkedList.findMiddle());
linkedList.push(6);
console.log("Link list after push(6):", linkedList);
console.log("Middle element even:", linkedList.findMiddle());

/* ----------------- Test Has Loop method ----------------- */
console.log("Has loop:", list.hasLoop());
list.tail.next = list.head;
console.log("Has loop:", list.hasLoop());
list.tail.next = null;

exports.linkedList = new LinkedList();

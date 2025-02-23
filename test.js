const Heap = require("./Heap");

const heap = new Heap();
heap.insert(99);
heap.insert(57);
heap.insert(36);
heap.insert(25);
heap.insert(10);

console.log(heap.getHeap()); // [99, 57, 36, 25, 10]
heap.insert(100);
console.log(heap.getHeap()); // [100, 99, 36, 57, 10, 25]
heap.insert(55);
console.log(heap.getHeap()); // [100, 99, 55, 57, 10, 25, 36]

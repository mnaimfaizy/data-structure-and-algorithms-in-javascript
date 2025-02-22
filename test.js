const Queue = require("./Queue");

const queue = new Queue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log("Queue:", queue);

console.log(queue.dequeue());
console.log(queue.dequeue());

console.log("After dequeue:", queue);

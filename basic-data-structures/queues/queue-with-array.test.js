import Queue from "./queue-with-array.js";

const queue = new Queue();

queue.enqueue(5);
queue.enqueue(8);
queue.enqueue(6);
queue.enqueue(48);

console.log("Dequeued:", queue.dequeue());

console.log("Peek:", queue.peek());
console.log("Size:", queue.size());
console.log("Is empty:", queue.isEmpty());
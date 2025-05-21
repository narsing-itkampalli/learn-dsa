import Stack from "./stack-with-array.js";

const stack = new Stack();

stack.push(5)
stack.push(8)
stack.push(6)
stack.push(48)

console.log("Peek:", stack.peek());
console.log("Size:", stack.size());
console.log("Is empty:", stack.isEmpty());
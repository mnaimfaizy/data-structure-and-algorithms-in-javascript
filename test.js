const Stack = require("./Stack.js");

const stack = new Stack(1);
stack.push(2);
stack.push(3);
console.log(stack);

stack.pop();
console.log(stack);
stack.pop();
console.log(stack);

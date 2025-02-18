const arr = require("./Array");

const newArr = new arr();
newArr.push(1);
newArr.push(2);
newArr.push(3);
newArr.push(4);

console.log("New Array after push(1, 2, 3, 4):", newArr);

newArr.pop();
newArr.pop();

console.log("New Array after 2 times pop():", newArr);

newArr.unshift(1);

console.log("   New Array after unshift(1):", newArr);

newArr.insert(1, 2);

console.log("   New Array after insert(1, 2):", newArr);

newArr.remove(1);

console.log("   New Array after remove(1):", newArr);

newArr.shift();

console.log("   New Array after shift():", newArr);

newArr.push(4);
newArr.push(5);
newArr.push(6);

console.log("   New Array after push(4, 5, 6):", newArr);
console.log(" New Array after slice(1, 3):", newArr.slice(1, 3));

console.log("New Array after splice(2, 1): ", newArr.splice(2, 1));

console.log("New Array after revers(): ", newArr.reverse());

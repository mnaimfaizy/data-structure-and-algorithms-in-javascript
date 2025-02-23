const HashTable = require("./HashTable");

const ht = new HashTable();
console.log(ht);

ht.set("hello", "world");
console.log(ht);
ht.set("goodbye", "world");
console.log(ht);

console.log(ht.get("hello"));

console.log(ht.keys());
ht.set("test", "value");
console.log(ht.keys());

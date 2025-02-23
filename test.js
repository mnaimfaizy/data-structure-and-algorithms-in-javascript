const Graph = require("./Graph");

const g = new Graph();

console.log("Empty adjacency list:", g);

g.addVertex("A");
console.log("Adjacency list with vertex A:", g);

g.addVertex("B");

g.addEdge("A", "B");
console.log("Adjacency list with edge A-B:", g);

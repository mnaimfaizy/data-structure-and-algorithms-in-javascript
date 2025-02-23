const Graph = require("./Graph");

const g = new Graph();

console.log("Empty adjacency list:", g);

g.addVertex("A");
console.log("Adjacency list with vertex A:", g);

g.addVertex("B");
g.addVertex("C");

g.addEdge("A", "B");
console.log("Adjacency list with edge A-B:", g);
g.addEdge("A", "C");
g.addEdge("B", "C");
console.log("Adjacency list with edges A-B and A-C and B-C:", g);

g.removeEdge("A", "B");
console.log("Adjacency list with edge A-B removed:", g);

g.removeVertex("B");
console.log("Adjacency list with vertex B removed:", g);

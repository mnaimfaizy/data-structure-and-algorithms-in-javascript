let fibArray = [];
let counter = 0;

function fibonacci(n) {
  counter++;
  if (fibArray[n] !== undefined) return fibArray[n];

  if (n === 0 || n === 1) return n;

  fibArray[n] = fibonacci(n - 1) + fibonacci(n - 2);
  return fibArray[n];
}

console.log("Fibonacci number - [Memoization]: ", fibonacci(40)); // 102334155
console.log("Counter: ", counter); // 79

let counter2 = 0;
function fibonacci2(n) {
  let fibArray = [0, 1];

  for (let i = 2; i <= n; i++) {
    counter2++;
    fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
  }

  return fibArray[n];
}

console.log("Fibonacci number - [Tabulation]: ", fibonacci2(40)); // 102334155
console.log("Counter: ", counter2); // 39
// The time complexity of the memoization solution is O(n) and the space complexity is O(n).
// The time complexity of the tabulation solution is O(n) and the space complexity is O(n).
// The tabulation solution is more efficient than the memoization solution because it does not require the overhead of function calls and stack frames.
// The memoization solution is more intuitive and easier to implement than the tabulation solution.
// The memoization solution is top-down, while the tabulation solution is bottom-up.
// The memoization solution is recursive, while the tabulation solution is iterative.

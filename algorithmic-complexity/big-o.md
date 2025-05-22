# Big O Notation (O) — Worst Case

| Complexity | Name          |
| ---------- | ------------- |
| O(1)       | Constant time |
| O(log n)   | Logarithmic   |
| O(n)       | Linear        |
| O(n log n) | Linearithmic  |
| O(n²)      | Quadratic     |
| O(2ⁿ)      | Exponential   |
| O(n!)      | Factorial     |

Note:
If an algorithm takes at most `5n^2 + 4n + 3` steps, it's O(n²) because `n²` dominates as `n` grows.

## Code Examples:
```js
function exampleFunction(n) {
  let count = 0;

  // 5n^2 part
  for (let a = 0; a < 5; a++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        count++; // This simulates 5n² operations
      }
    }
  }

  // 4n part
  for (let b = 0; b < 4; b++) {
    for (let i = 0; i < n; i++) {
      count++; // This simulates 4n operations
    }
  }

  // Constant part (3 operations)
  count++;
  count++;
  count++;

  console.log("Total operations:", count);
}

exampleFunction(10); // Try with different values of n
```
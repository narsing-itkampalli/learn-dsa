# Leetcode: 2044. Count Number of Maximum Bitwise-OR Subsets

## ✅ Approach 1: Backtracking with Bitwise OR
`./solution.js`

We explore **all possible subsets** using backtracking and keep track of the current OR value.  
First, we compute the **maximum possible OR value** from all elements — call it `maxOr`.

During backtracking:
- At each step, we have two choices: include or exclude the current number.
- When we reach the end of the array (`index === nums.length`), we check if the accumulated OR equals `maxOr`. If so, we increment the count.

### ⏱ Time and Space Complexity

* **Space Complexity:** O(2ⁿ) — We generate all subsets (each element has two choices: include or exclude).
* `n` is the length of `nums`.
* **Space Complexity:** O(n) — For the recursive call stack (at most `n` deep due to backtracking).

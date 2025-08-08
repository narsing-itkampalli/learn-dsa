# 808. Soup Servings

https://leetcode.com/problems/soup-servings

## Approach 1: Memoization with Scaling
`./solution.js`

### Intuition

This problem can be modeled as a recursive probability tree. At each step, we branch into four scenarios with equal likelihood, each reducing the amount of soup A and B. To avoid recomputing overlapping subproblems, we use **memoization**.

Since all serving sizes are multiples of 25, we **scale down `n` by dividing by 25** to reduce the state space. For example, if `n = 100`, we instead compute with `n = 4`.

We use a **top-down dynamic programming** (DP) approach, with a memoized recursive function `dp(a, b)` that returns the probability when A has `a` units left and B has `b` units left (in units of 25mL).

Additionally, for very large `n` (e.g., `n > 5000`), the result approaches `1.0`, so we can directly return `1.0` to avoid unnecessary computation.

### Algorithm

1. If `n > 5000`, return `1.0` as an optimization.
2. Define a recursive function `dp(a, b)`:
   - If `a <= 0 && b <= 0`: return `0.5` (both empty at same time)
   - If `a <= 0`: return `1.0` (A empty first)
   - If `b <= 0`: return `0.0` (B empty first)
   - Otherwise, return average of the 4 recursive cases (each with 0.25 weight)
3. Use a memoization map to cache results of `(a, b)`.

### Time & Space Complexity

* **Time Complexity:** O(n²) where n = scaled `n` (`n/25`)
* **Space Complexity:** O(n²) for memoization
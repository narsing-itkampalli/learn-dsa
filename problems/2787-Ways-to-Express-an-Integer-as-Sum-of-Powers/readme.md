# 2787. Ways to Express an Integer as Sum of Powers

https://leetcode.com/problems/ways-to-express-an-integer-as-sum-of-powers

## Approach 1: DFS + Memoization
`./1-dfs-memoization.js`

### Explanation
1. **Precompute all possible powers** of integers raised to `x` that are ≤ `n`.
2. Use **Depth-First Search (DFS)** with memoization to explore combinations:
   - At each step, either take the current power or skip it.
   - Track `(index, current_sum)` as the memoization key.
3. Return the count of valid combinations modulo `1_000_000_007`.

### Time and Space Complexity
- **Time Complexity:** `O(p * n)` where `p` = number of powers ≤ `n`.
- **Space Complexity:** `O(p * n)` for the memoization map.

## Approach 2 — Efficient Dynamic Programming (Optimized from Approach 1)
`./2-efficient-dynamic-programming.js`

In the first approach, DFS with memoization was used. Although correct, it caused **TLE** for larger inputs because of the exponential recursion.

This second approach uses **1D dynamic programming** to avoid recomputation and improve performance.

**Steps:**

1. Precompute all powers ≤ `n` for the given `x`.
2. Initialize a DP array `dp` where `dp[s]` stores the number of ways to form sum `s`.
3. Use a **knapsack-like iteration**:

   * For each power `p`, update `dp[sum]` for `sum` from `n` down to `p`.
   * This ensures each power is used at most once (unique integers).
4. Return `dp[n]` modulo `10^9 + 7`.

### Time and Space Complexity
**Time Complexity:** `O(n * k)` where `k` is the number of powers generated.
**Space Complexity:** `O(n)`.

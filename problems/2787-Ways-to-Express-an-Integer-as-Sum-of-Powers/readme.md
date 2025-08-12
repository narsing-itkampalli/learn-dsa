# 2787. Ways to Express an Integer as Sum of Powers

https://leetcode.com/problems/ways-to-express-an-integer-as-sum-of-powers

## Approach 1: DFS + Memoization

### Explanation
1. **Precompute all possible powers** of integers raised to `x` that are ≤ `n`.
2. Use **Depth-First Search (DFS)** with memoization to explore combinations:
   - At each step, either take the current power or skip it.
   - Track `(index, current_sum)` as the memoization key.
3. Return the count of valid combinations modulo `1_000_000_007`.

### Time and Space Complexity
- **Time Complexity:** `O(p * n)` where `p` = number of powers ≤ `n`.
- **Space Complexity:** `O(p * n)` for the memoization map.


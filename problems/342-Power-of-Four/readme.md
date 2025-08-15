# 342. Power of Four

https://leetcode.com/problems/power-of-four

## Approach 1: Iterative Division
`./1-solution.js`

### Explanation
1. Start with the given number `n`.
2. As long as `n` is positive and either equal to `1` or divisible by `4`, keep dividing `n` by `4`.
3. If at any point `n` becomes `1`, return `true` (because 1 = 4⁰, which is a valid power of four).
4. If the loop ends without hitting `1`, return `false`.
5. This works because powers of four (1, 4, 16, 64, …) are the only numbers that can be repeatedly divided by `4` until they reach `1` without leaving a remainder.

### Time and Space Complexity

* **Time Complexity:** `O(log₄n)`  
  * In each iteration, `n` is divided by `4`, so the number of steps is proportional to `log₄n`.

* **Space Complexity:** `O(1)`  
  * No extra data structures are used; only a few variables are stored.

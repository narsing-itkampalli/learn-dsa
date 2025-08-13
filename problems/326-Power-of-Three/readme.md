# 326. Power of Three

https://leetcode.com/problems/power-of-three

## Approach 1: Iterative Division
`./1-loop.js`

### Explanation

This approach repeatedly divides the number `n` by `3` until it becomes `1` or drops below `1`.

1. **Loop**
   * While `n` is greater than `1`, divide it by `3`.
   * If `n` was originally a power of three, repeated division will eventually make it exactly `1`.

2. **Final Check**
   * Return `true` if `n` equals `1`, otherwise `false`.

**Why this works:**

* A power of three can be expressed as `3^k` for some integer `k ≥ 0`.
* Repeatedly dividing by `3` will always reach exactly `1` if and only if the number is a power of three.

### Time and Space Complexity

* **Time Complexity:** `O(log₃ n)`
  * Each division by 3 reduces `n` by a factor of 3, so the loop runs about `log₃ n` times.

* **Space Complexity:** `O(1)`
  * No extra space used apart from a few variables.

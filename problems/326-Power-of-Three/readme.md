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

## Approach 2: Divisibility by Maximum Power of 3

`./2-solution.js`

### Explanation

This approach uses the fact that the largest power of three that fits in a 32-bit signed integer is `3^19 = 1162261467`.

1. **Key Insight**

   * If `n` is a power of three, it must divide `3^19` evenly.
   * We just check if `3^19 % n === 0` and ensure `n > 0`.

2. **Why it works**

   * Any positive power of three is a factor of `3^19`.
   * If `n` divides `3^19` without a remainder, it must be a power of three.


### Time and Space Complexity
* **Time Complexity:** `O(1)` — single modulus operation.
* **Space Complexity:** `O(1)` — uses constant extra space.
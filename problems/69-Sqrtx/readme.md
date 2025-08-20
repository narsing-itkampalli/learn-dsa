# 69. Sqrt(x)

https://leetcode.com/problems/sqrtx/

## Approach 1: Binary Search
`./1-binary-search.js`

### Explanation
We need to find the square root of `x` without using built-in functions and round it down to the nearest integer.

1. Since the square root of `x` always lies between `0` and `x/2` (for `x >= 2`), we can search within this range.
2. Use **binary search**:
   - Start with `left = 1` and `right = x/2`.
   - Compute `mid = (left + right) // 2`.
   - If `mid * mid == x`, we found the exact square root.
   - If `mid * mid < x`, move `left` up (`left = mid + 1`) and store `mid` as the current best answer.
   - If `mid * mid > x`, move `right` down (`right = mid - 1`).
3. Continue until `left > right`. The stored `ans` will be the largest integer whose square is less than or equal to `x`.
4. Special case: if `x < 2`, return `x` directly (`0` → `0`, `1` → `1`).

This works because binary search systematically narrows the range, ensuring we find the integer square root in logarithmic time.

### Time and Space Complexity

* **Time Complexity:** `O(log x)`  
  * Each iteration halves the search range, so the number of iterations is proportional to `log₂(x)`.  
* **Space Complexity:** `O(1)`  
  * We only use a few variables (`left`, `right`, `mid`, `ans`), so extra space usage is constant.
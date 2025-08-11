# 2438. Range Product Queries of Powers

https://leetcode.com/problems/range-product-queries-of-powers

## Approach 1: Direct Multiplication from Powers List
`./1-invalid-solution.js`

### Explanation

1. Convert `n` into its binary representation (reversed for easier indexing).
2. For each set bit in the binary form, push its corresponding power of 2 into the `powers` array.
3. For each query `[from, to]`, multiply all powers in that range and return the result.

**Why this is invalid:**

* The problem requires returning results **modulo `1e9+7`**, but this solution omits modulus handling, causing integer overflow for large values.
* Also, the range is based on the **order of powers in increasing exponent**, which is correct, but without modulus, it fails on larger inputs.

### Time and Space Complexity

* **Time Complexity:** `O(q * k)`

  * `q` = number of queries,
  * `k` = length of range in each query.
* **Space Complexity:** `O(log n)`

  * Only the list of powers is stored, which at most has `log₂(n)` elements.
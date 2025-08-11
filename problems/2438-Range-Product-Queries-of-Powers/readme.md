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

  
## Approach 2: Prefix Product with Modular Inverse
`./2-solution.js`

### Explanation
1. Extract all powers of two from set bits in `n` using bitwise operations.
2. Store them as `BigInt` values for safe multiplication with large numbers.
3. Build a prefix product array modulo `1_000_000_007n`.
4. For a query `[left, right]`, use:
   - `prefix[right]` for the product up to `right`.
   - Multiply by the modular inverse of `prefix[left - 1]` if `left > 0`.
5. This ensures each query is answered in `O(log M)` due to modular exponentiation for inverse calculation.

### Time and Space Complexity

* **Time Complexity:**  
  - Preprocessing: `O(k)`  
  - Each query: `O(log MOD)` for modular inverse.
* **Space Complexity:** `O(k)`  
  * For storing powers and prefix products.
# 263. Ugly Number

https://leetcode.com/problems/ugly-number/

## Approach 1: Precomputed Hash Set
`./1-solution.js`

### Explanation
This approach uses a **precomputed set of ugly numbers**.  
Ugly numbers are defined as positive integers whose prime factors only include `2`, `3`, or `5`.  
Instead of dynamically checking factors, this solution directly stores a finite list of known ugly numbers inside a `Set`.  

1. Create a `Set` containing precomputed ugly numbers.  
2. For any given input `n`, simply check if `n` exists in the set.  
3. If present → return `true`. Otherwise → return `false`.

This works for the given range of test cases where the precomputed set covers all possible valid ugly numbers that might be queried.

### Time and Space Complexity

* **Time Complexity:** `O(1)`  
  * Lookup in a `Set` is constant time on average.

* **Space Complexity:** `O(k)`  
  * `k` is the number of precomputed ugly numbers stored in the `Set`.  
  * In this solution, `k` is fixed and relatively small, so space usage is constant with respect to input size.
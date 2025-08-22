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

## Approach 2: Prime Factor Division
`./2-solution.js`

### Explanation
This approach checks if a number is ugly by **dividing it repeatedly by 2, 3, and 5**.  
Ugly numbers are defined as numbers whose prime factors are limited to these three primes.  

1. If `n <= 0`, return `false` because ugly numbers must be positive.  
2. While `n` is divisible by `2`, divide it by `2`.  
3. While `n` is divisible by `3`, divide it by `3`.  
4. While `n` is divisible by `5`, divide it by `5`.  
5. After removing all factors of `2`, `3`, and `5`, check if the result is `1`.  
   * If yes → the number is ugly.  
   * If not → the number has other prime factors and is not ugly.  

This method directly uses the definition of ugly numbers, so it works for all integer inputs.

### Time and Space Complexity

* **Time Complexity:** `O(log n)`  
  * In the worst case, we divide `n` repeatedly by `2`, `3`, or `5`. Each division reduces `n` significantly, so the loop count is logarithmic.  

* **Space Complexity:** `O(1)`  
  * Only a few variables are used; no extra data structures are needed.
# 869. Reordered Power of 2

https://leetcode.com/problems/reordered-power-of-2

## Approach 1: Backtracking Permutations
`./1-solution.js`

Instead of generating all permutations of `n` and checking each one, we:

1. Convert `n` into an array of its digits.
2. Loop through powers of two from `2^0` to `2^29` (since `2^30` exceeds 10 digits).
3. For each power of two:

   * Convert it into its digit array.
   * If the number of digits matches `n`:

     * Check if both arrays contain the exact same digits (order doesn't matter).
4. If any match is found, return `true`.
5. Otherwise, return `false`.

We stop early if the number of digits in the power of two exceeds `n`.

### Time and Space Complexity

* **Time Complexity:** `O(30 * k^2)`

  * We loop through at most 30 powers of two.
  * For each power, comparing digits takes `O(k^2)` where `k` is the number of digits (max 10 for integers up to `10^9`).
* **Space Complexity:** `O(k)`

  * Extra space is used for storing digit arrays.

### Why This Works

* Powers of two have unique digit patterns.
* By directly comparing digit counts instead of generating permutations, we reduce complexity.
* Early exit conditions speed up execution.

## Approach 2: Digit Sorting (Optimized)
`./2-digit-sorting-optimized.js`

Instead of generating permutations, sort the digits of `n` and compare with sorted digits of powers of two up to the possible range.

**Why it works:**
Two numbers are digit permutations of each other if and only if their sorted digit strings match.


### Time and Space Complexity

**Time Complexity:** `O(30 × k log k)`
    * k is the number of digits in `n`.
    * Much faster than permutations.

**Space Complexity:** `O(k)`
    * O(k) for storing sorted digits.


## Comparison

| Approach      | Time Complexity | Space Complexity | Pros                                      | Cons                                               |
| ------------- | --------------- | ---------------- | ----------------------------------------- | -------------------------------------------------- |
| Backtracking  | O(k! · k)       | O(k)             | Works for any similar permutation problem | Very slow for large `n`                            |
| Digit Sorting | O(30 × k log k) | O(k)             | Very fast, simple implementation          | Only works for checking against specific known set |

## Conclusion

The **Digit Sorting** approach is the optimal solution for this problem due to its low complexity and simplicity.
The **Backtracking** approach is useful for understanding the brute-force method but is impractical for large inputs.
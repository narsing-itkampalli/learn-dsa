# 496. Next Greater Element I

https://leetcode.com/problems/next-greater-element-i

## Approach 1: Monotonic Stack
`./1-solution.js`

### Explanation
1. Reverse `nums2` so we can process it from right to left.
2. Use a stack to keep track of possible "next greater" candidates in decreasing order.
3. For each number in `nums2`:
   - Find its next greater element from the stack using `getMaxNum`.
   - Add it to the stack while popping any smaller elements using `stackAdd`.
4. Store the mapping from each number to its next greater number in a `map`.
5. Map each element in `nums1` to its next greater number using the `map` (or `-1` if none found).
6. This works because a monotonic stack efficiently tracks potential next greater elements.

### Time and Space Complexity

* **Time Complexity:** `O(n * m)`

  * In the worst case, `getMaxNum` is `O(n)` and is called for each of the `n` elements in `nums2`, so `O(n^2)` in the worst scenario.  
  * With optimized monotonic stack logic, it can be reduced to `O(n)`, but in this specific code, it’s closer to `O(n^2)`.
* **Space Complexity:** `O(n)`

  * The stack and map store up to `n` elements where `n` is the length of `nums2`.

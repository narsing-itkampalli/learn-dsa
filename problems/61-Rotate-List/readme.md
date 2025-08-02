# 61. Rotate List

https://leetcode.com/problems/rotate-list

## Approach 1: Two-Pointer with Length Calculation
`./modulo-rotation.js`

This approach rotates a linked list to the right by `k` positions using a **modulo-based index shift**. The idea is to avoid unnecessary full rotations and then reconnect the list at the appropriate point.

### Steps:

1. **Edge Case Handling**:  
   If the list is empty or contains only one node, return it as is.

2. **Count Length**:  
   Traverse the list once to get its length `n`.

3. **Optimize Rotations**:  
   Since rotating by `n` results in the same list, compute `k = k % n`.

4. **Early Return**:  
   If `k === 0`, no rotation is needed.

5. **Find New Tail**:  
   Move a pointer `n - k - 1` steps from the head to find the new tail.

6. **Break & Rotate**:
   - Let `newHead = newTail.next`
   - Set `newTail.next = null` to break the list.
   - Traverse to the end of `newHead` and connect its tail to the original head.

7. Return `newHead`.

### Time and Space Complexity

* **Time Complexity:** `O(n)`

  * One pass to count nodes
  * One pass to find the new tail
  * One pass to find the tail and connect it

* **Space Complexity:** `O(1)`

  * In-place manipulation without extra space.

# 92. Reverse Linked List II

https://leetcode.com/problems/reverse-linked-list-ii

## Approach 1: Identify Boundaries and Reverse In-Place
`./solution.js`

This approach reverses a portion of the linked list from position `left` to `right` **in-place**, without using extra space. It first locates the boundaries of the sublist to be reversed, then reverses the nodes, and finally reconnects the reversed sublist back into the original list.

### Steps:

1. **Edge Case Handling**:  
   If the list is empty or has only one node, return it as is.

2. **Traverse to Identify:**
   - `startPrev`: node just before the `left` position.
   - `start`: node at position `left`.
   - `end`: node at position `right`.
   - `endNext`: node just after `right`.

3. **Reverse the Sublist**:  
   Reverse nodes from `start` to `end` using a helper function.

4. **Reconnect**:
   - If `startPrev` exists, link it to the new start of the reversed sublist.
   - If not, update `head` to point to the new head (when reversal starts from position `1`).
   - Link the end of the reversed sublist to `endNext`.

### Time and Space Complexity

* **Time Complexity:** `O(n)`
  One full traversal to locate nodes and another to reverse a portion of the list.

* **Space Complexity:** `O(1)`
  All operations are done in-place.
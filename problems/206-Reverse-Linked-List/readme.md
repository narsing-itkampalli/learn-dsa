# 206. Reverse Linked List

## Approach 1: Iterative In-Place Reversal
`./solution.js`

### Intuition

To reverse a linked list, we need to **change the direction of each node’s `next` pointer**, so that it points to the previous node instead of the next one.

We can do this efficiently using a simple loop and **three pointers**: `prev`, `curr`, and `next`.

### Explanation

1. Initialize `prev = null` and `curr = head`.
2. Iterate through the list:

   * Store `curr.next` in `next`.
   * Set `curr.next = prev` to reverse the link.
   * Move `prev` and `curr` one step forward.
3. When done, `prev` will point to the new head of the reversed list.

### Time and Space Complexity

* **Time Complexity:** `O(n)`
  We visit each node exactly once.

* **Space Complexity:** `O(1)`
  No extra space is used — only a few pointers.

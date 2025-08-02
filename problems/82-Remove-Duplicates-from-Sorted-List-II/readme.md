# 82. Remove Duplicates from Sorted List II

https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii

## Approach 1: Two-Pointer with Tail Tracker
`./two-pointer-with-tail-tracker.js`

This approach removes **all nodes that have duplicate numbers**, leaving only nodes with **unique values** from the original sorted linked list.

### Key Idea

We use two pointers, `prev` and `curr`, to iterate through the list. If we detect a sequence of nodes with the same value, we **skip the entire block** and reconnect the list to the next distinct node.

We also maintain a `tail` pointer to track the **last confirmed unique node**, so that we can properly reconnect nodes when duplicates are removed.

### Steps:

1. Handle base cases (empty or single-node list).
2. Initialize:
   - `prev`: the node we’re checking against `curr`
   - `curr`: starts from `head.next`
   - `tail`: points to the last confirmed unique node
3. Traverse the list:
   - If `prev.val === curr.val`, call `getNextDistinctValNode(curr)` to skip all duplicates.
     - If `tail` exists, reconnect: `tail.next = newNode`
     - Otherwise, update `head` to new node
   - If `prev.val !== curr.val`, move `tail`, `prev`, and `curr` forward normally
4. Return the updated head of the list.

### Time and Space Complexity

* **Time Complexity:** `O(n)`
  Every node is visited once.

* **Space Complexity:** `O(1)`
  No extra data structures used.

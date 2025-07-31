# 2095. Delete the Middle Node of a Linked List

## Approach 1: Fast and Slow Pointer
`./fast-slow-pointer.js`

We use the two-pointer approach to locate the middle node:
- `slow` moves one step at a time.
- `fast` moves two steps at a time.
- When `fast` reaches the end, `slow` will be at the middle.

We also keep track of the previous node (`prev`) to the `slow` pointer, so we can remove the middle node by updating `prev.next`.

### Edge Case:
- If the list has only one node, we return `null`.


### Time and Space Complexity

* **Time Complexity:** O(n)
  Traverses the list once to find and delete the middle node.

* **Space Complexity:** O(1)
  Uses a constant amount of extra space.

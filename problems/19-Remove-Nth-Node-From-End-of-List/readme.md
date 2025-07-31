# 19. Remove Nth Node From End of List

## Approach 1: Reverse → Remove → Reverse Back
`./basic-solution.js`

### Intuition

* Directly removing the `n`-th node from the **end** requires either:

  1. First traversing the list to get its length, or
  2. Using two pointers spaced `n` apart.

* But another valid and interesting approach is:

  * **Reverse the list**.
  * Remove the `n`-th node from the start.
  * **Reverse it again** to restore the original order (minus the deleted node).

### Explanation

1. Use a helper function to reverse the linked list.
2. After reversing, remove the `n`-th node using a simple loop.
3. Then reverse the list again to return it to its original order.


### Time and Space Complexity

* **Time Complexity:** `O(n)`

  * One pass to reverse the list.
  * One pass to delete the node.
  * One pass to reverse it again.

* **Space Complexity:** `O(1)`

  * In-place operations, no extra data structures used.

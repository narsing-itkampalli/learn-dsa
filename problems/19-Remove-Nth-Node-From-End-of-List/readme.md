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

---

## Approach 2: Fast-Slow Pointer with Length Inference
`./remove-nth-from-end-fast-slow.js`

### Intuition

Instead of traversing the entire list to calculate its length, or using two pointers spaced `n` apart, this approach infers the total length using the **fast-slow pointer technique** (commonly used to find the middle of a list).

Then, the position from the **start** is calculated from the `n`-th from end. Finally, we traverse and remove the target node in a single pass from the correct position.

### Explanation

1. Use two pointers:

   * `slow` moves one step at a time
   * `fast` moves two steps at a time
2. Keep track of how many steps `slow` has taken until `fast` reaches the end.
3. Based on the final values and whether the list length is even or odd, estimate the **total number of nodes**.
4. Convert the `n`-th node from the end to the equivalent position from the **start**.
5. Traverse the list (starting from either `head` or `slow`) and remove the node.

### Time and Space Complexity

* **Time Complexity:** `O(n)`

  * One pass to reach the midpoint and infer length
  * One additional pass (partial) to remove the node

* **Space Complexity:** `O(1)`

  * No extra memory used, just pointers

---

## Approach 3: One-Pass Fixed Gap (Two-Pointer)
`./one-pass-fixed-gap.js`

### Intuition

* Use two pointers, `fast` and `curr`, with `fast` starting `n` nodes ahead.
* Once `fast` reaches the end, `curr` will be at the node to remove.
* Keep a `prev` pointer to help remove the `curr` node cleanly.

### Explanation

1. Move `fast` ahead by `n - 1` steps to create a gap of `n` between `curr` and `fast`.
2. Traverse the list with both `fast` and `curr` until `fast` reaches the last node.
3. If `curr` is at the head and we’re removing the first node from the end, update the head.
4. Otherwise, skip the `curr` node by setting `prev.next = curr.next`.

### Time and Space Complexity

* **Time Complexity:** `O(n)`

  * Single traversal of the list.

* **Space Complexity:** `O(1)`

  * Uses only pointers.

### Notes

* This is the optimal and widely-accepted solution.
* You avoided the dummy node and still handled edge cases like removing the head.

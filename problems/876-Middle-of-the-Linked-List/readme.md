# 876. Middle of the Linked List

## Approach 1: Two Pointer Technique (Fast and Slow)
`./slow-fast-pointer.js`

### Intuition

* To find the middle efficiently, we can use **two pointers**:

  * `slow` moves one step at a time.
  * `fast` moves two steps at a time.
* When `fast` reaches the end of the list, `slow` will be at the **middle**.

### Explanation

1. Start both `slow` and `fast` at the head.
2. Move `slow` by 1 and `fast` by 2 nodes in each iteration.
3. When `fast` reaches the end (or `fast.next` is null), return `slow`.

### Time and Space Complexity

* **Time Complexity:** `O(n)`

  * Each pointer traverses part of the list, but the whole loop runs in linear time.

* **Space Complexity:** `O(1)`

  * No extra space is used, only two pointers.

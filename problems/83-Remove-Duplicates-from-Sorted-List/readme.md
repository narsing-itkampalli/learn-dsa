# 83. Remove Duplicates from Sorted List

## Approach 1: Iterative In-Place Removal
`solution.js`

1. Start from the head of the list.
2. Traverse the list using a pointer `node`.
3. For each node:

   * If the value of `node` equals the value of `node.next`, skip the duplicate node by pointing `node.next` to `node.next.next`.
   * Otherwise, move the `node` pointer forward.
4. Continue until the end of the list.

### Time Complexity

* **O(n)** — where `n` is the number of nodes in the list. Each node is visited at most once.

### Space Complexity

* **O(1)** — constant space is used since no additional data structures are created. All operations are done in-place.
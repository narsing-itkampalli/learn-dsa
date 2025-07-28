# 203. Remove Linked List Elements

## Approach 1: Two Pointers (Previous & Current)
`./solution.js`

We use two pointers to go through the linked list:

* `current` – to look at each node one by one.
* `previous` – to help remove the node if needed.

### How it works:

1. Start with `previous = null` and `current = head`.
2. For each node:

   * If `current.val === val`, we want to remove this node.

     * If `previous` exists, we set `previous.next = current.next` (skipping the node).
     * If `previous` is `null`, that means we’re removing the head, so we update `head = current.next`.
   * If the value doesn't match, we move `previous = current`.
3. Move `current = current.next` every time.
4. Return the updated `head`.

### Time and Space Complexity

* **Time Complexity**: `O(n)` — We visit each node once.
* **Space Complexity**: `O(1)` — No extra space is used.
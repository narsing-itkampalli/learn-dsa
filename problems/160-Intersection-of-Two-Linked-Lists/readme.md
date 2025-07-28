# 160. Intersection of Two Linked Lists

## Approach 1: Two Pointers (Switch Heads Technique)
`./solution.js`

We use two pointers: `pointerA` for list A and `pointerB` for list B.

### How it works:

1. Start both pointers at the heads of their respective lists.
2. Move each pointer one step at a time.
3. If a pointer reaches the end of its list, switch it to the head of the other list.
4. Keep doing this until both pointers are equal.

   * If there's an intersection, they will meet at the intersection node.
   * If not, both will eventually become `null` and exit the loop.

This works because both pointers travel the same total length when switched — listA + listB — and they sync up at the point of intersection (if it exists).

### Time and Space Complexity

* **Time Complexity**: `O(n + m)` — where `n` and `m` are the lengths of the two lists.
* **Space Complexity**: `O(1)` — No extra space is used.
# 1721. Swapping Nodes in a Linked List

https://leetcode.com/problems/swapping-nodes-in-a-linked-list

## Approach 1: Two Pointers
`./two-pointer.js`

1. Traverse to the `k`th node from the start and store the pointer (`firstPointer`).
2. Use a second pointer (`fast`) to move to the end from the `k`th node, while another pointer (`lastPointer`) starts from head.
3. When `fast` reaches the end, `lastPointer` will be at the `k`th node from the end.
4. Swap the values of the `firstPointer` and `lastPointer`.

### Time and Space Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)
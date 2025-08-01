# 24. Swap Nodes in Pairs

https://leetcode.com/problems/swap-nodes-in-pairs/description/

## Approach 1: Iterative In-Place Swapping with Tail Connector
`./solution.js`

### Description

In this approach, we use an iterative method to swap every two adjacent nodes in the linked list. We maintain references to the `prev` and `curr` nodes, and rearrange their links in-place. We also track the tail of the already-processed portion of the list (`tailConnector`) so that newly swapped pairs can be connected correctly to the final result.

### Steps:

1. **Edge Case**: If the list is empty or has only one node, return the head.
2. **Initialization**:

   * `newHead`: The new head of the result list (which is the second node of the original list).
   * `tailConnector`: Points to the last node of the already processed (swapped) list, used to connect to the next swapped pair.
3. Traverse the list using a loop and on every **even iteration**:

   * Swap `prev` and `curr` nodes.
   * Connect the `tailConnector` (from the previous swap) to the newly swapped pair.
   * Advance pointers to the next pair.
4. On **odd iterations**, just move `prev` and `curr` forward without swapping.

### Final Return:

Return `newHead`, which points to the new beginning of the list after all pairwise swaps.

### Time and Space Complexity

* **Time Complexity:** `O(n)`
  We iterate through each node of the list once, performing constant-time operations per node.

* **Space Complexity:** `O(1)`
  No additional data structures are used; the node connections are changed in-place.
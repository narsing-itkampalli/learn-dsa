# 86. Partition List

https://leetcode.com/problems/partition-list

## Approach 1: In-Place Reordering Using Insert Tail Logic (Partially Implemented)

This approach attempts to partition the linked list **in-place** such that all nodes with values less than `x` come before nodes with values greater than or equal to `x`. The relative order of nodes in each partition should be preserved.

### Idea:

- Find the first node (`insertTail`) after which all values are greater than or equal to `x`.
- Then iterate through the rest of the list:
  - If a node with value `< x` is found beyond this point, remove it from its current position.
  - Re-insert it after `insertTail`, updating the partition tail.
  
This keeps nodes less than `x` grouped toward the front while avoiding the use of extra dummy lists.

### Current Status:

🚧 **This implementation is a work-in-progress.**  
- Core logic for locating `insertTail` and reordering nodes is written.
- Edge cases and pointer updates might need refinement.
- Final `head` updates and some boundary checks may be incomplete.


### Time and Space Complexity (Planned)

* **Time Complexity:** `O(n)` — Every node visited once.
* **Space Complexity:** `O(1)` — In-place node manipulation, no extra memory used.

These will remain accurate once implementation is finalized.

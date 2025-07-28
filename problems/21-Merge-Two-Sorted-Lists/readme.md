# 21. Merge Two Sorted Lists

https://leetcode.com/problems/merge-two-sorted-lists

## 🧠 Approach 1: In-Place Iterative Merge
`./merge-sort.js`

This solution merges two sorted linked lists **in-place** without using extra space or creating new nodes. The idea is to traverse the two lists and attach nodes from the second list (`rest`) into the correct position within the first list (`list1` or `list2`), depending on whichever has the smaller starting value.

1. **Base Case**:
   If either list is null, return the other one.
   `if (!list1 || !list2) return list1 || list2;`

2. **Initialization**:

   * Identify the list with the smaller first value and mark it as `root` and `current`.
   * The other list becomes `rest`, which we try to insert into `current` in the correct order.

3. **Iterative Insertion**:

   * Traverse both `current` and `rest` together.
   * If `rest` node should be placed after `current` but before `current.next`, insert it.
   * Else, move `current` forward.
   * If `current.next` becomes null, simply attach the remaining part of `rest`.

4. **Return Result**:
   The `root` pointer always points to the start of the merged list.

### 🕒 Time and Space Complexity

* **Time Complexity**: `O(n + m)`
  Where `n` is the length of `list1` and `m` is the length of `list2`, because we traverse both once.

* **Space Complexity**: `O(1)`
  No new nodes or significant extra memory is used; it’s all done in-place.
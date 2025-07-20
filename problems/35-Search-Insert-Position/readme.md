# 35. Search Insert Position

## Approach 1: Brute-force
`brute-force.js`
This solution goes through each element in the array and finds the first position where the `target` is less than or equal to the current element. If such a position is found, it returns the index. If the `target` is greater than all elements, it returns the length of the array (insert at the end).

### Time & Space Complexity

* **Time:** O(n) — in the worst case, it goes through the entire array.
* **Space:** O(1) — no extra space is used.
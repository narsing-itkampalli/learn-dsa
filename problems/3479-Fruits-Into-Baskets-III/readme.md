# 3479. Fruits Into Baskets III

https://leetcode.com/problems/fruits-into-baskets-iii

## Approach 1: Segment Tree (Range Maximum Query)
`./segment-tree.js`

### Key Idea
- Build a segment tree on the `baskets` array to allow fast queries of the **maximum** value in any range.
- For each fruit, use the segment tree to locate the **leftmost basket** that can hold it.
- Once a basket is used, mark its capacity as `-1` (so it won't be reused).
- Update the segment tree as needed to maintain correct RMQ values.

### Steps
1. Build a segment tree on the baskets array.
2. For each fruit:
   - Use the segment tree to find the leftmost basket with sufficient capacity.
   - If found, mark that basket as used and update the segment tree.
   - Otherwise, increase the count of unplaced fruits.

### Time Complexity
- **Building Segment Tree**: `O(n)`
- **Each Query + Update**: `O(log n)`
- **Total Time**: `O(n log n)` — for `n` fruits

### Space Complexity
- **Segment Tree Storage**: `O(4n)`
- No extra space apart from the segment tree and recursion stack.

### Why Segment Tree?
Using a segment tree allows us to quickly find the leftmost valid basket (in `O(log n)`) instead of scanning linearly (`O(n)`), making the solution much more efficient for large input sizes.

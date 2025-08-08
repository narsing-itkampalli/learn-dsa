# 3363. Find the Maximum Number of Fruits Collected

https://leetcode.com/problems/find-the-maximum-number-of-fruits-collected/

## Approach 1: **Three-Phase Path Collection with DFS + Memoization**
`./solution.js`

### Idea

The problem asks us to collect the maximum number of fruits on an `n x n` grid in **three different traversals**:

1. **First path**: Diagonal from top-left `(0,0)` to bottom-right `(n-1, n-1)` taking only `fruits[i][i]`.
2. **Second path**: Start from `(0, n-1)` and move downwards to `(n-1, n-1)` using three possible directions:

   * Down-left `(1, -1)`
   * Down `(1, 0)`
   * Down-right `(1, 1)`
3. **Third path**: Start from `(n-1, 0)` and move rightwards to `(n-1, n-1)` using three possible directions:

   * Up-right `(-1, 1)`
   * Right `(0, 1)`
   * Down-right `(1, 1)`

The paths must **not overlap** on the same cell except for their start/end points where allowed.

### Approach

1. **First Path (Direct Diagonal)**
   Simply sum `fruits[i][i]` for all `i` from `0` to `n-1`.

2. **Second Path (Top-right → Bottom-right)**

   * Use DFS with memoization to explore all valid moves within the grid.
   * Keep track of remaining moves and avoid visiting the same row/column as the starting diagonal at the same time.
   * Store results in `mem1[row][col]` to avoid recomputation.

3. **Third Path (Bottom-left → Bottom-right)**

   * Similar DFS approach as the second path, but with rightward directions.
   * Use `mem2[row][col]` for memoization.

4. **Final Answer** = `first path sum` + `second path max fruits` + `third path max fruits`.

### DFS Function

The `dfs()` function:

* Takes current position `(row, col)`, remaining moves, a memo table, and the allowed directions.
* Returns **maximum fruits collectable** from current cell to `(n-1, n-1)` following movement rules.
* Uses `INF` to represent invalid paths.

### Complexity Analysis

* **Time Complexity**:
  Each DFS call visits at most `n * n` states, and each state explores up to `3` directions.
  With memoization, the complexity is:

  $$
  O(3 \cdot n^2) \quad \Rightarrow \quad O(n^2)
  $$

* **Space Complexity**:

  * Memoization arrays: `O(n^2)` for each path.
  * Call stack depth: `O(n)` in worst case for DFS recursion.
    Total:

  $$
  O(n^2)
  $$
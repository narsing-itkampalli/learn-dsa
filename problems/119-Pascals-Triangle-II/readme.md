# 119. Pascal's Triangle II

https://leetcode.com/problems/pascals-triangle-ii

## Approach 1: Build Triangle Up to RowIndex
`./solution.js`

This approach builds Pascal’s Triangle row by row until the required `rowIndex` is reached, and then returns the last generated row.

### Steps:

1. Initialize an empty result array.
2. For each row `i` from 0 to `rowIndex`:
   - Create a new row array.
   - Loop through each index `j` of that row:
     - If `j` is at the edge (0 or `i`), push `1`.
     - Else, push the sum of the two elements above:  
       `result[i - 1][j - 1] + result[i - 1][j]`
   - Push this row into the result array.
3. After building all rows, return the last one.

### Time and Space Complexity

* **Time Complexity:** `O(rowIndex^2)`
  We generate each row up to the given index.

* **Space Complexity:** `O(rowIndex^2)`
  We store all intermediate rows in memory.

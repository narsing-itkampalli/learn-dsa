# 118. Pascal's Triangle

https://leetcode.com/problems/pascals-triangle

## Approach 1: Build Triangle Row-by-Row (Dynamic Programming)

### Description

This approach generates Pascal's Triangle by building each row based on the previous row.

* The triangle starts with `1` at the top.
* Each number inside the triangle is the sum of the two numbers directly above it.
* The first and last elements of each row are always `1`.

### Steps:

1. Initialize an empty result array `result` to store each row.
2. Loop from `i = 0` to `numRows - 1`:

   * Create an empty array `row` for the current row.
   * For each position `j` in the row:

     * If `j == 0` or `j == i`, insert `1` (edge of the triangle).
     * Otherwise, insert the sum of the two values above:
       `result[i-1][j-1] + result[i-1][j]`
   * Push the row into `result`.

### Final Return:

Return the `result` array which contains all rows of Pascal's Triangle.

### Time and Space Complexity

* **Time Complexity:** `O(numRows^2)`
  Each row contains `i` elements, so total elements processed ≈ `1 + 2 + ... + numRows = numRows*(numRows+1)/2`

* **Space Complexity:** `O(numRows^2)`
  We store the entire triangle.
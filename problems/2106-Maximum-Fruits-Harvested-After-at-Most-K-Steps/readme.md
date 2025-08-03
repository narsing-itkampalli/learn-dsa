# 2106. Maximum Fruits Harvested After at Most K Steps

## Approach 1: Two-Pointer + Prefix Sum with Binary Search
`./two-pointer-prefix-sum-binary-search.js`

### Intuition

The goal is to collect the maximum number of fruits within at most `k` total steps, starting at a given `startPos`. Each element in the `fruits` array is `[position, amount]`, and the array is sorted by position.

Since we can move left and right from `startPos`, the problem becomes a matter of choosing how far left and how far right to go, ensuring the total steps don't exceed `k`. The key trick is to consider **splitting movement in both directions** and calculating the maximum harvest using **prefix sums** and **binary search**.

### Solution Explanation

1. **Divide fruits into left and right arrays relative to `startPos`**:

   * `left`: fruits located on or before `startPos`, stored as `[distanceFromStartPos, amount]`
   * `right`: fruits located after `startPos`, stored similarly

2. **Reverse the left array** to maintain increasing distance order (like `right`).

3. **Build prefix sums** (`psum_left` and `psum_right`) for fast total amount queries within a certain distance.

4. **Use binary search** (`count_le`) to find how many fruits are within a given distance.

5. **Try all possible splits of movement between left and right**:

   * For each `i` from 0 to `k`, consider two cases:

     * Go `i` steps to the left, then to the right with remaining steps (`k - 2*i`)
     * Go `i` steps to the right, then to the left with remaining steps (`k - 2*i`)
   * Update `max_collection` with the sum of fruits in the valid range using prefix sums.

### Complexity Analysis

* **Time Complexity**:

  * Dividing the array into left and right: O(n)
  * Prefix sum computation: O(n)
  * For each of `k` (max `k+1` iterations), we do two binary searches: O(log n)
  * Total: **O(n + k log n)**

* **Space Complexity**:

  * Left and right arrays: O(n)
  * Prefix sum arrays: O(n)
  * Total: **O(n)**

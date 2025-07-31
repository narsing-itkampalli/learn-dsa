# 898. Bitwise ORs of Subarrays

https://leetcode.com/problems/bitwise-ors-of-subarrays

## Problem Statement
Given an integer array `arr`, return the number of distinct values that can be obtained by taking the bitwise OR of all possible subarrays.

## Approach 1: Set-Based OR Tracking
`./set-based-or-tracking.js`

We use two sets:
- `res` to store all unique OR values across all subarrays.
- `prev` to store OR values of subarrays ending at the previous index.

### Steps:
1. Iterate through each number in the array.
2. For each number, initialize a new set `cur` with just that number.
3. For each value in `prev`, compute `val | num` and add to `cur`.
4. Add all values of `cur` to `res`.
5. Assign `cur` to `prev` for the next iteration.

### Why it works:
- Bitwise OR is non-decreasing: once a bit is set to 1, it stays 1 or gets OR'ed with more 1s.
- So, for each position, the number of unique OR values is bounded.

### Time and Space Complexity:
- **Time:** O(n * 30) — at most 30 different OR results per element (for 32-bit integers).
- **Space:** O(n * 30) due to the sets.
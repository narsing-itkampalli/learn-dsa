# 2411. Smallest Subarrays With Maximum Bitwise OR

https://leetcode.com/problems/smallest-subarrays-with-maximum-bitwise-or

## Approach 1: Reverse Bit Tracking
`./reverse-bit-tracking.js`

We traverse the array in reverse (from `n-1` to `0`) and track the **last seen index for each bit** (up to 32 bits).
At each index `i`, we update the position for each bit in `nums[i]`, and compute how far we need to go from `i` to include all the important bits in the OR result.  
The difference between `i` and the furthest required index gives the length of the smallest subarray with the maximum OR starting at `i`.

1. Initialize an array `lastSeen[32]` to keep track of last seen index of each bit.
2. Traverse from right to left.
3. At each index `i`, update `lastSeen` for bits set in `nums[i]`.
4. Find the farthest index `maxReach` needed based on the last seen bits.
5. Set `answer[i] = maxReach - i + 1`.

### ⏱ Time and Space Complexity

**Space Complexity:** O(n \* 32) → simplified to **O(n)**, where `n` is the length of the input array.
* We check up to 32 bits per index.

**Space Complexity:** O(32 + n) → simplified to **O(n)**:
  * `lastSeen` stores 32 values
  * `answer` stores `n` values
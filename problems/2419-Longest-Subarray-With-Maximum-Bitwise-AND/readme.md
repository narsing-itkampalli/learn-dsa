# 2419. Longest Subarray With Maximum Bitwise AND

## Approach 1: Max Element Streak
`./max-element-streak.js`

### Intuition

* The **bitwise AND** of a subarray can never be **greater than the maximum element** in the array. In fact, the **maximum possible AND** can only be achieved when **every number in the subarray is equal to that max value**.
* So, instead of trying all subarrays (which is inefficient), we **find the maximum number** in the array and **count the length of the longest streak** (subarray) of that number.

### Explanation

1. First, compute the **maximum value** in the array using `Math.max(...nums)`.
2. Then, loop through the array:

   * If the current number is equal to the max, increase the `currentLen`.
   * If not, reset `currentLen` to 0.
   * Update `maxLen` to keep track of the **longest streak** of max value elements.

### Time and Space Complexity

* **Time Complexity:** `O(n)`
  We traverse the array once to find the max and once more to compute the longest streak.

* **Space Complexity:** `O(1)`
  We use only a few variables — no extra space proportional to input size.

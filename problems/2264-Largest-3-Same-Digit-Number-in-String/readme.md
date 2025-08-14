# 2264. Largest 3-Same-Digit Number in String

https://leetcode.com/problems/largest-3-same-digit-number-in-string

## Approach 1: Sliding Window / Consecutive Count
`./1-solution.js`

### Explanation
1. Initialize an empty array `found` to store digits that appear three times consecutively.
2. Iterate through each character `n` in the string `num` while keeping track of the previous character `prev` and a `count` of consecutive matches.
3. If the current digit `n` is the same as `prev`, increment `count`. Otherwise, reset `count` to 1.
4. When `count` reaches 3, add the numeric value of `n` to the `found` array.
5. After iterating, if `found` contains any digits, return the largest one repeated three times as a string. If none are found, return an empty string.
6. This works because we only care about sequences of exactly three identical digits and want the largest such sequence.

### Time and Space Complexity
* **Time Complexity:** `O(n)`

  * We iterate through the string once, where `n` is the length of the input string `num`.
* **Space Complexity:** `O(k)`

  * `k` is the number of sequences of three consecutive identical digits. In the worst case, `k` can be at most `n/3`, but typically much smaller.

# 1695. Maximum Erasure Value

## Problem
Given an array of positive integers `nums`, you need to find the maximum sum of a subarray with unique elements.

## Sliding Window + Hash Map
`sliding-window.js`

We use a sliding window (`left` and `right` pointers) to maintain a window of unique elements.  
We keep track of the current sum of the window (`winSum`) and the maximum sum so far (`maxSum`).

- If the current number is **not in the map**, we add it to the window and update the sums.
- If it **is in the map**, we remove elements from the left of the window until it's unique again.

This approach ensures that the window always contains **unique elements**.

## Time and Space Complexity
- **Time Complexity:** `O(n)`  
- **Space Complexity:** `O(n)`

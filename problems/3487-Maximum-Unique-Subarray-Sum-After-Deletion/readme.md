# LeetCode Problem: Maximum Sum of Unique Positive Elements

## Problem Statement

Given an array of integers `nums`, the goal is to compute the sum of all **unique** positive integers in the array. If no positive unique number exists, return the **maximum number** from the array (even if it's negative or repeated).

## ✅ Approach 1: **Hash Map for Tracking Unique Positives**
`hash-map.js`

* I used a `Map` to track which **positive** numbers have already been counted.
* For each element in the array:
  * If it is **positive** and **not yet seen**, I added it to the running `sum` and stored it in the map.
  * Otherwise, I updated a `max` variable to keep track of the highest value in the array.
* Finally, I returned the sum of unique positives. If no positive numbers exist, I returned the `max` value (which could be negative or zero).

### Time and Space Complexity

* **Time Complexity:** `O(n)`
  Only a single pass through the array; `Map` operations are constant time on average.

* **Space Complexity:** `O(n)`
  In the worst case, all `n` elements are unique positive numbers, stored in the map.

## ✅ Approach 2: **Replaced Map with Set**
> Same time and space complexity
# 3477. Fruits Into Baskets II

https://leetcode.com/problems/fruits-into-baskets-ii

## Approach 1: Greedy Placement with Basket Usage Tracking
`./solution.js`

We use a **greedy** approach:

* Iterate through each fruit in order.
* For each fruit, find the **first basket** that:

  * Is not already used, and
  * Has a capacity ≥ the current fruit's quantity.
* If such a basket is found:

  * Mark that basket as used.
* If no suitable basket is found:

  * Increment a counter to track **unplaced fruit types**.


### Time Complexity

* **O(n²)** — For each of the `n` fruit types, we may scan up to `n` baskets to find a suitable one.

### Space Complexity

* **O(n)** — Extra space is used to keep track of which baskets have been used.

# 904. Fruit Into Baskets

## Approach 1: Sliding Window (Two Pointers)
`sliding-window.js`

This problem is solved using the **sliding window** technique with two pointers `i` and `j`. We use a `Map` to track the count of each fruit type in the current window.

### Algorithm:
1. Initialize two pointers `i` and `j` to define the window.
2. Expand the window by incrementing `j` and adding the fruit at position `j` to the map.
3. If the map has more than two types of fruits, shrink the window from the left by moving `i` forward and decreasing the count of the fruit at index `i`. If its count becomes zero, remove it from the map.
4. At each step, if the map size is less than or equal to 2, update the `count` with the maximum window size seen so far.
5. Return the `count` which holds the maximum number of fruits we can collect in two baskets.

This approach ensures we always maintain a valid window that satisfies the condition of having at most two fruit types.

### Time Complexity:
- **O(n)** – Each fruit is added and removed from the map at most once.

### Space Complexity:
- **O(1)** – Since the map holds at most 2 types of fruits at a time.

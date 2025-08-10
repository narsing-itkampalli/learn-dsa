# 933. Number of Recent Calls

https://leetcode.com/problems/number-of-recent-calls

## Approach 1: Backward Range Check with Array
`./1-solution.js`

### Explanation

We maintain an array `requests` to store the timestamps of all incoming requests.

When a new `ping(t)` is called:

1. Append the timestamp `t` to `requests`.
2. Iterate backward from the most recent timestamp.
3. Count how many timestamps fall within the range `[t - 3000, t]`.
4. Stop the loop once a timestamp is found that is less than `t - 3000` (since older ones will be even smaller).
5. Return the count.

This works because:

* The pings are guaranteed to come in **strictly increasing order**.
* Stopping early avoids unnecessary checks for older timestamps.

### Time and Space Complexity

* **Time Complexity:** `O(k)`

  * `k` = number of requests within the last 3000 ms.
  * We iterate only over recent requests and stop early when an older timestamp is found.
* **Space Complexity:** `O(n)`

  * `n` = total number of requests since the start of the program (old timestamps are not removed).

## Approach 2: Queue-Based Sliding Window
`./2-queue-based-sliding-window.js`

### Explanation

Instead of keeping all timestamps forever, we only store the ones that fall inside the last 3000 ms.
When `ping(t)` is called:

1. Append `t` to `requests`.
2. Remove timestamps from the front of the array while they are less than `t - 3000`.
3. Return the current length of the array (which equals the number of recent requests).

This ensures the array always contains only the valid "window" of recent requests.

### Time and Space Complexity

* **Time Complexity:** `O(1)` amortized —

  * Each request is added once and removed once.
* **Space Complexity:** `O(k)` —

  * Only stores requests from the last 3000 ms.
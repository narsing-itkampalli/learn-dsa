# 933. Number of Recent Calls

https://leetcode.com/problems/number-of-recent-calls

## Approach 1: Backward Range Check with Array
`./solution.js`

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
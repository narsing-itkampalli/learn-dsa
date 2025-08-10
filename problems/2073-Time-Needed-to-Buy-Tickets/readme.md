# 2073. Time Needed to Buy Tickets

https://leetcode.com/problems/time-needed-to-buy-tickets

## Approach 1: Queue Simulation
`./1-queue-simulation.js`

### Explanation

We simulate the ticket buying process exactly as described:

1. The `tickets` array acts as a queue, where each element represents the number of tickets a person still needs to buy.
2. We repeatedly:

   * Remove the first person (`shift()`), decrement their ticket count, and increment the total time `res`.
   * If they still need tickets, add them back to the end of the queue.
3. Track `k` (the target person) by adjusting it after each operation:

   * If `k > 0`, decrement it since the target moves forward in the queue.
   * If `k == 0` and the current person’s ticket count reaches `0`, stop and return `res`.
   * If `k == 0` but they still have tickets, set `k` to the last index of the queue after reinserting them.

### Time and Space Complexity

* **Time Complexity:** `O(n * m)` in the worst case

  * `n` = number of people, `m` = maximum tickets needed by a person.
  * Each `shift()` is `O(n)`, making it slower for large queues.
* **Space Complexity:** `O(1)`

  * Operates directly on the `tickets` array without extra storage.

## Approach 2: Optimized Single Pass
`./2-solution.js`

This approach avoids simulating each ticket purchase and instead calculates the total time directly in a **single pass**.
We iterate through the `tickets` array once and sum up the number of tickets each person will buy before the `k`-th person gets their last ticket.

**Key Idea**

* For people **before or at** position `k`, they can buy up to `targetTickets` tickets.
* For people **after** position `k`, they can buy at most `targetTickets - 1` tickets because the loop ends immediately when person `k` finishes.

### Time and Space Complexity

* **Time Complexity:** `O(n)` — Single iteration over the array.
* **Space Complexity:** `O(1)` — No extra data structures used.
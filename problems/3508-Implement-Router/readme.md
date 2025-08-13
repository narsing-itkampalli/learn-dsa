# 3508. Implement Router

https://leetcode.com/problems/implement-router

## Approach 1: Array-Based Packet Buffer
`./1-solution.js`

### Explanation

This approach uses an **array as a bounded buffer** to store packets with their `source`, `destination`, and `timestamp`.

1. **Initialization**

   * `memoryLimit`: Maximum number of packets that can be stored at once.
   * `packets`: Array holding packets in the order they were received.
   * `packetCount`: Tracks the current number of stored packets.

2. **Add Packet (`addPacket`)**

   * Checks recent packets in reverse order to see if an identical `(source, destination, timestamp)` already exists.
   * If the buffer is full, automatically removes the oldest packet (`forwardPacket`).
   * Appends the new packet to the buffer.

3. **Forward Packet (`forwardPacket`)**

   * Removes the oldest packet (front of the array).
   * Returns the removed packet or an empty array if none exist.

4. **Get Count (`getCount`)**

   * Iterates backward over packets until timestamps drop below `startTime`.
   * Counts packets that match the given `destination` and fall within `[startTime, endTime]`.

**Why this works:**

* The array preserves arrival order, making `forwardPacket` a simple `shift()`.
* Reverse iteration in `addPacket` and `getCount` minimizes unnecessary comparisons when timestamps are sorted in non-decreasing order.

### Time and Space Complexity

* **Time Complexity:**

  * `addPacket`: `O(m)` in worst case (checking duplicates, where `m` is current packet count)
  * `forwardPacket`: `O(1)` amortized for removal (shift)
  * `getCount`: `O(m)` in worst case

* **Space Complexity:** `O(memoryLimit)`

  * Stores at most `memoryLimit` packets at any time.
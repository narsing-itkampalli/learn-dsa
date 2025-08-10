# 622. Design Circular Queue

https://leetcode.com/problems/design-circular-queue

## Approach 1: Array-Based Simulation
`./1-array-simulation.js`

We simulate the circular queue behavior using a fixed-size array (`this.queue`) and a capacity limit (`this.size`).

### Steps

1. **Initialization:** Store the maximum size in `this.size` and initialize an empty `this.queue` array.
2. **enQueue:** Push the value if the queue is not full.
3. **deQueue:** Remove the first element if the queue is not empty.
4. **Front & Rear:** Access first and last elements if not empty.
5. **isEmpty & isFull:** Compare `this.queue.length` with `0` or `this.size`.

### Time and Space Complexity

* **Time Complexity:**
  * `enQueue`, `Front`, `Rear`, `isEmpty`, `isFull` → **O(1)**
  * `deQueue` → **O(n)** (because `Array.shift()` is O(n) in JavaScript)

* **Space Complexity:** `O(k)` — For storing up to `k` elements.

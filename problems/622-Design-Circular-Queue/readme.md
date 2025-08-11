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

## Approach 2: Circular Array with Modular Indexing
`./2-true-cicular-queue.js`

### Explanation

1. Maintain a **fixed-size array** of length `k` to store queue elements.
2. Track two values:

   * `head` → index of the front element.
   * `count` → current number of elements in the queue.
3. **Enqueue**: Place the new element at `(head + count) % size` and increment `count`.
4. **Dequeue**: Move `head` forward by `(head + 1) % size` and decrement `count`.
5. **Front** and **Rear**:

   * Front is at `queue[head]`.
   * Rear is at `(head + count - 1) % size`.
6. **isEmpty** → `count === 0`, **isFull** → `count === size`.
7. This design avoids shifting elements and achieves O(1) operations.

### Time and Space Complexity

* **Time Complexity:** `O(1)`

  * All operations (enqueue, dequeue, front, rear, isEmpty, isFull) use direct index access and modular arithmetic.

* **Space Complexity:** `O(k)`

  * A fixed array of size `k` is used to store elements, plus O(1) variables for `head` and `count`.

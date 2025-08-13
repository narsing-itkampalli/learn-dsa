# 641. Design Circular Deque

https://leetcode.com/problems/design-circular-deque

## Approach 1: Circular Buffer Implementation
`./1-solution.js`

### Explanation

This approach uses a **circular buffer** to efficiently manage insertions and deletions from both ends of a fixed-size deque.

1. **Initialization**

   * `this.queue`: An array of fixed length `k` to store elements.
   * `this.size`: Maximum allowed size of the deque.
   * `this.head`: Index of the front element.
   * `this.count`: Current number of elements in the deque.

2. **Insert at Front (`insertFront`)**

   * Move `head` one step backward in a circular way: `(head - 1 + size) % size`.
   * Place the new value at this position.
   * Increment `count`.

3. **Insert at Rear (`insertLast`)**

   * Calculate tail position as `(head + count) % size`.
   * Place the new value there.
   * Increment `count`.

4. **Delete from Front (`deleteFront`)**

   * Move `head` forward by one in a circular way.
   * Decrease `count`.

5. **Delete from Rear (`deleteLast`)**

   * Just decrement `count` (tail is implicitly tracked via head and count).

6. **Get Front / Rear**

   * Front is always at `this.head`.
   * Rear is `(head + count - 1) % size`.

7. **Check Empty / Full**

   * Empty when `count === 0`.
   * Full when `count === size`.

**Why this works:**

* The circular buffer ensures O(1) time for all operations without shifting elements.
* Modular arithmetic allows index wrapping so that both ends can be modified efficiently.

### Time and Space Complexity

* **Time Complexity:** `O(1)`

  * All operations (`insertFront`, `insertLast`, `deleteFront`, `deleteLast`, `getFront`, `getRear`, `isEmpty`, `isFull`) are constant time since they only involve index calculation and direct array access.

* **Space Complexity:** `O(k)`

  * Uses an array of fixed size `k` to store deque elements.
  * No additional data structures are used.
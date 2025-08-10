# 1700. Number of Students Unable to Eat Lunch

https://leetcode.com/problems/number-of-students-unable-to-eat-lunch

## Approach 1: Simulation with Queue Rotation
`./1-solution.js`

### Explanation

We simulate the lunch distribution process exactly as described:

1. Students are in a queue (`students` array).
2. The sandwiches are in a stack (`sandwiches` array, accessed by index `j`).
3. If the student at the front of the queue wants the sandwich at the top of the stack:

   * Remove the student from the queue.
   * Move to the next sandwich (`j++`).
   * Reset the counter `i` to `0` since the queue rotation restarts.
4. If the student does **not** want the sandwich:

   * Move the student from the front to the back of the queue.
   * Increment `i`.
5. If `i` reaches the length of `students`, it means no student in the queue wants the current sandwich, so the process ends.

Finally, the length of `students` is the number of students unable to eat.

### Time and Space Complexity

* **Time Complexity:** `O(n^2)` in the worst case

  * `shift()` on an array is `O(n)` and can happen up to `n` times for each rotation.
* **Space Complexity:** `O(1)`

  * We modify the `students` array in place without using extra storage.
# 234. Palindrome Linked List

## Approach 1: Convert to Array
`./convert-to-array.js`

### Intuition

* A palindrome is a sequence that reads the same forward and backward.
* Since linked lists do not allow direct access by index, we can **convert the list into an array** and then use the standard two-pointer comparison to check if it’s a palindrome.

### Explanation

1. Traverse the linked list and store each node's value in an array.
2. Use two pointers (`i` from the start and `n - i - 1` from the end) to compare elements.
3. If all mirrored values are equal, return `true`. Otherwise, return `false`.

### Time and Space Complexity

* **Time Complexity:** `O(n)`
  * One pass to convert the list to array.
  * Another pass to check for palindrome (up to half the array).

* **Space Complexity:** `O(n)`
  * We store all node values in an array.

## Notes

* This approach is simple and readable.
* More optimized approaches can reduce space to `O(1)` using fast/slow pointers and reversing half the list in-place.

## Approach 2: **Reverse Second Half of List**
`./reverse-second-half.js`

### Goal: Reduce space complexity to `O(1)`

1. **Find the middle** of the linked list using **slow and fast pointers**.
2. **Reverse the second half** of the list in-place.
3. **Compare** the first half and reversed second half node by node.
4. (Optional) **Restore** the list to its original form.

### 🧠 Time & Space Complexity

* **Time Complexity:** `O(n)` — one pass to find middle, one to reverse, one to compare
* **Space Complexity:** `O(1)` — all operations are in-place

### ✅ Why It's Better

* Uses **constant space**.
* Efficient even for very large linked lists.
* Shows stronger understanding of **linked list manipulation**.
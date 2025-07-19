# 16. 3Sum Closest

https://leetcode.com/problems/3sum-closest

---

## 🧠 Problem

Given an integer array `nums` of length `n` and an integer `target`, find three integers in `nums` such that the sum is closest to `target`. Return the sum of the three integers.

You may assume that each input would have exactly one solution.

---

## 📥 Example

**Input:**
```
nums = [-1, 2, 1, -4], target = 1
```

**Output:**
```
2
```

**Explanation:**
The closest sum to 1 is `2` (`-1 + 2 + 1` = 2).

---

## 🚀 Solution 1: Brute-Force

### ⏱️ Time and Space Complexity

* **Time Complexity:** `O(n³)`
  Due to three nested loops checking every possible triplet.

* **Space Complexity:** `O(1)`
  No extra space used other than variables for computation.

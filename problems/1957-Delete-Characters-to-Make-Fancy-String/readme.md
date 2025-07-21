# 1957. Delete Characters to Make Fancy String

## Problem

A **fancy string** is a string where **no three consecutive characters are equal**. Given a string `s`, delete the minimum number of characters to make it fancy.

---

## Approach 1: Greedy with Result String
`greedy.js`

* **Idea:** Build result string character by character and skip any character that forms 3 consecutive same characters.

* **Issue:** Failed at runtime due to string immutability and inefficiency in repeated `+=` operations on strings.

* **Time Complexity:** O(n²) — `res += s[i]` creates a new string every time (costly for large `n`)

* **Space Complexity:** O(n) — extra space used for result string
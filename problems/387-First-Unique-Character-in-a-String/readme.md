# 387. First Unique Character in a String

https://leetcode.com/problems/first-unique-character-in-a-string

## Approach 1: Hash Map (Frequency Counting)
`./1-frequency-count.js`

We use a `Map` to store the frequency of each character in the string.

**Steps:**

1. Iterate over the string and store the count of each character in the `Map`.
2. Iterate over the `Map` in the order characters appeared.
3. Return the index of the first character whose count is `1` using `s.indexOf(letter)`.
4. If no unique character is found, return `-1`.

### Time and Space Complexity

* **Time Complexity:** `O(n)`

  * First loop to count frequencies takes `O(n)`.
  * Second loop iterates over unique characters, at most `O(n)`.
  * `s.indexOf(letter)` is `O(n)` in the worst case, but since it runs for each unique character only once, the overall complexity is still considered `O(n)` for this approach.
* **Space Complexity:** `O(1)` or `O(k)`

  * We store counts for at most `k` unique characters.
  * For lowercase English letters, `k` is constant (`26`), so space is `O(1)`.

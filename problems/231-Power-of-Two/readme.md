# 231. Power of Two

https://leetcode.com/problems/power-of-two

## Approach 1: Bit Manipulation
`./1-bit-manipulation.js`

### Explanation

A number is a power of two if it has exactly **one** bit set to `1` in its binary representation.
For example:

* `1` → `0001` (power of two)
* `2` → `0010` (power of two)
* `4` → `0100` (power of two)
* `5` → `0101` (not a power of two)

### Key Insight

If a number `n` is a power of two, then `n - 1` will have all bits after the single `1` flipped to `1`.
For example:

* `4` (`0100`) → `n - 1` = `3` (`0011`)
* `8` (`1000`) → `n - 1` = `7` (`0111`)

When we perform a bitwise `AND` operation between `n` and `n - 1`, we get `0` **only** if `n` is a power of two.

The condition is:

```js
n > 0 && (n & (n - 1)) === 0
```

* `n > 0` ensures negative numbers and zero are excluded.
* `(n & (n - 1)) === 0` checks that only one bit is set.

### Complexity Analysis

* **Time Complexity:** `O(1)`
  The bitwise operation takes constant time, regardless of the input value.

* **Space Complexity:** `O(1)`
  No extra space is used except for a few variables.

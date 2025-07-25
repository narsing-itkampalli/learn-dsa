# 67: Add Binary

## Approach 1: BigInt Conversion and Summation
`./solution.js`

We leverage JavaScript’s `BigInt` for easy binary arithmetic:

- Prefix both binary strings with `"0b"` to convert them directly to BigInt.
- Add the two BigInts.
- Convert the result back to a binary string using `.toString(2)`.


#### Time Complexity:

* **O(n + m)**
  where `n` and `m` are the lengths of input strings `a` and `b`.

  * Conversion of binary string to BigInt takes O(n) and O(m)
  * BigInt addition takes O(max(n, m))
  * `.toString(2)` takes O(max(n, m)) as well

#### Space Complexity:

* **O(max(n, m))**
  Memory is used to store BigInt representations and the final binary string.
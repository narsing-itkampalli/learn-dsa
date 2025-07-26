# 3480. Maximize Subarrays After Removing One Conflicting Pair

## 🧠 Approach 1: Greedy Optimization with Gap Contribution Strategy
`greedy-gap-strategy.js`

### Intuition

* The total number of subarrays in a sequence of size `n` is:

  $$
  \text{totalSubarrays} = \frac{n(n+1)}{2}
  $$
* Every conflicting pair invalidates certain subarrays.
* If we remove one *strategic* conflicting pair, we can regain the maximum number of valid subarrays.

This solution efficiently calculates the **maximum profit** we get by removing one conflicting pair, using a **greedy scanning and gap strategy**.

### ✅ Key Steps

1. **Normalize Conflicting Pairs**
   Ensure that in each pair `[a, b]`, `a < b` for consistency.

2. **Sort by Ending Element**
   Sorting pairs by their `b` value helps track the valid subarray ranges more efficiently.

3. **Track Blocked Subarrays**

   * For each conflicting pair, calculate how many subarrays are blocked because of it.
   * Track running totals using BigInt to prevent overflow.

4. **Compute "Profit" if One Pair Is Removed**

   * Maintain two largest `start` values (`max1` and `max2`) to compute how much overlap is caused.
   * `profit = (max1 - max2) * gap` — this models the benefit we get if we remove one blocking pair.

5. **Return Final Result**
   Final result = Total subarrays - Blocked subarrays + Max profit by removing one pair.

### ⏱ Time and Space Complexity

| Complexity | Value                 |
| ---------- | --------------------- |
| 🕒 Time    | O(m log m)            |
| 💾 Space   | O(1) (ignoring input) |

* `m = conflictingPairs.length`
* Sorting dominates time complexity.
* Space is constant because no extra data structures are used except scalars.
# 2561. Rearranging Fruits

https://leetcode.com/problems/rearranging-fruits

## Approach 1: Frequency Balancing & Greedy Swaps

### Idea

We first track how many of each fruit type we have more in one basket than the other using a frequency balance map. For each fruit type, we increase the count for `basket1` and decrease for `basket2`.

If the difference in count for any fruit is **odd**, it's impossible to make the baskets identical (since swaps work in pairs). We return `-1` in that case.

Once we have the imbalanced fruit counts, we compute the minimum number of swaps needed to balance them. For each surplus fruit type, we need to move half the difference to the other basket.

To minimize cost, we sort the transfer list and for each swap, we take the **cheaper between the current fruit and twice the global minimum fruit value**. The "twice" comes from the idea of doing a two-step swap using the smallest fruit (proxy swap) to reduce the cost.

### Time Complexity

* **O(n + m log m)**

  * `n` is the number of fruits in baskets.
  * We build the frequency map in O(n).
  * Sorting the transfer list (which can contain at most `n` elements) takes O(m log m), where `m` is the length of `transfer`.

### Space Complexity

* **O(n)**

  * To store the balance map and transfer list.

✅ **Optimized**
💡 **Greedy + Frequency Map**
🚫 **Returns -1 if impossible**
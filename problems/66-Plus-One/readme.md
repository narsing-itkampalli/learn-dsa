# 66. Plus One

## Approach 1: Reverse Loop
`reverse-loop.js`
- Start from the last digit and simulate +1.
- If sum is less than 10, set and break.
- If sum is 10, set digit to 0 and continue carry to next left.
- If carry remains after full loop, unshift 1 at the beginning.

### Time & Space
- Time Complexity: O(n)
- Space Complexity: O(1) (in-place)
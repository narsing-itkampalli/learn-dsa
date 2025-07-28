# 20. Valid Parentheses

## 🧠 Approach 1: Stack with Closing Match Check
`./solution.js`

This approach uses a **stack** to track the expected closing brackets as we iterate through the string. It ensures each closing bracket matches the last opened one.

1. **Define Bracket Pairs**:
   Use an object to map each opening bracket to its corresponding closing bracket:

   ```js
   const parentheses = { "{": "}", "[": "]", "(": ")" };
   ```

2. **Initialize Stack**:
   Use an array (`store`) to simulate a stack to keep track of expected closing brackets.

3. **Iterate Through String**:

   * If the character is an opening bracket, push its matching closing bracket to the stack.
   * If it's a closing bracket, pop the top of the stack and check if it matches the current character.
   * If it doesn't match or stack is empty when a closing bracket is encountered, return `false`.

4. **Final Check**:
   Return `true` if the stack is empty at the end (all brackets matched properly).

### 🕒 Time and Space Complexity

* **Time Complexity**: `O(n)`
  We traverse the string once where `n` is the length of the input.

* **Space Complexity**: `O(n)`
  In the worst case, the entire string consists of opening brackets (e.g., `"((((("`), leading to a stack of size `n`.

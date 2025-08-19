# 104. Maximum Depth of Binary Tree

https://leetcode.com/problems/maximum-depth-of-binary-tree/

## Approach 1: Depth-First Search (DFS)
`./1-solution.js`

### Explanation
We use a recursive DFS approach to traverse the tree and compute its maximum depth.

1. Start from the root node with an initial depth of `0`.
2. For each node:
   - If the node is `null`, return the current depth (base case).
   - Otherwise, recursively compute the depth of the left and right subtrees, each time increasing the depth by `1`.
3. The maximum of the left and right subtree depths is returned as the depth of the current node.
4. Finally, the recursive calls unwind and the maximum depth of the entire tree is returned.

**Why this works:**  
At each node, we explore all possible paths to the leaf nodes, keeping track of how deep we go. By always taking the maximum of left and right depths, we guarantee that the final result is the longest path from root to a leaf.

### Time and Space Complexity

* **Time Complexity:** `O(n)`  

  * Each node in the binary tree is visited exactly once during the DFS traversal.  
  * Here, `n` is the number of nodes in the tree.  

* **Space Complexity:** `O(h)`  

  * The recursion stack can go as deep as the height `h` of the tree.  
  * In the worst case (a skewed tree), `h = n`, so the space complexity becomes `O(n)`.  
  * In the best case (a balanced tree), `h = log n`, so the space complexity is `O(log n)`.  

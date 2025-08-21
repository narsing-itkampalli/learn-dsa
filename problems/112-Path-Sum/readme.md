# 112. Path Sum

https://leetcode.com/problems/path-sum

## Approach 1: Depth-First Search (DFS)
`./1-solution.js`

### Explanation
1. We use a recursive **DFS traversal** starting from the root node.  
2. At each node, we keep track of the running sum (`count`) by adding the current node's value.  
3. If we reach a **leaf node** (no left or right child), we check whether the running sum equals the target sum.  
   * If yes → return `true`.  
   * If no → return `false`.  
4. Otherwise, we recursively check both left and right children. If either returns `true`, we propagate that result up.  
5. If no valid path exists, the function ultimately returns `false`.

This works because DFS explores all root-to-leaf paths and verifies if any path’s sum matches `targetSum`.

### Time and Space Complexity

* **Time Complexity:** `O(N)`  
  * Each node is visited once in the DFS traversal, where `N` is the number of nodes in the tree.  

* **Space Complexity:** `O(H)`  
  * The recursion stack can go as deep as the height of the tree `H`.  
  * In the worst case (skewed tree), `H = N`.  
  * In the best case (balanced tree), `H = log N`.  

import { runTest } from "../index.js";

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(!root) return false;

    const dfs = (node, count) => {
        count += node.val;
        if(!node.left && !node.right) return count === targetSum;
        if(node.left && dfs(node.left, count)) return true;
        if(node.right && dfs(node.right, count)) return true;
        return false;
    }

    return dfs(root, 0);
};

runTest(hasPathSum);
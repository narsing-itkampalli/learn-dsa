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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    const result = [];

    const recursion = (node) => {
        if(!node) return;
        recursion(node.left);
        recursion(node.right);
        result.push(node.val);
    }
    recursion(root);

    return result;
};

runTest(postorderTraversal);
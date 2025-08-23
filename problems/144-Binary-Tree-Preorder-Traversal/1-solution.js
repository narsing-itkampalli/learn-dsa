import { runTest } from "../index.js";

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    const result = [];

    const recursion = (node) => {
        if(!node) return;
        result.push(node.val);
        recursion(node.left);
        recursion(node.right);
    }
    recursion(root);

    return result;
};

runTest(preorderTraversal);
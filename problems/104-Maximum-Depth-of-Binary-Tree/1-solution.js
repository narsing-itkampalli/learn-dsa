import { runTest } from "../index.js";

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {

    const dfs = (node, count) => {
        if(!node) return count;
        return Math.max(dfs(node.left, count + 1), dfs(node.right, count + 1))
    }

    return dfs(root, 0);
};

runTest(maxDepth);
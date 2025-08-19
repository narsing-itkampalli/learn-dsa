export function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

export default class BinaryTree {

    static fromArray(arr) {
        if (!arr.length) return null;

        let root = new TreeNode(arr[0]);
        let queue = [root];
        let i = 1;

        while (queue.length && i < arr.length) {
            let current = queue.shift();

            // Left child
            if (i < arr.length && arr[i] !== null) {
                current.left = new TreeNode(arr[i]);
                queue.push(current.left);
            }
            i++;

            // Right child
            if (i < arr.length && arr[i] !== null) {
                current.right = new TreeNode(arr[i]);
                queue.push(current.right);
            }
            i++;
        }

        return root;
    }

    static toArray(root) {
        if (!root) return [];

        let result = [];
        let queue = [root];

        while (queue.length) {
            let node = queue.shift();

            if (node) {
                result.push(node.val);
                queue.push(node.left);
                queue.push(node.right);
            } else {
                result.push(null);
            }
        }

        // Trim trailing nulls (not needed in array representation)
        while (result[result.length - 1] === null) {
            result.pop();
        }

        return result;
    }
}
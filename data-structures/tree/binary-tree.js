import Queue from "../queue.js";

export default class BinaryTree {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }

    insertLeft(val) {
        let newNode = new BinaryTree(val);
        if (!this.left) {
            this.left = newNode;
        } else {
            newNode.left = this.left;
            this.left = newNode;
        }
    }

    insertRight(val) {
        let newNode = new BinaryTree(val);
        if (!this.right) {
            this.right = newNode;
        } else {
            newNode.right = this.right;
            this.right = newNode;
        }
    }

    dfs() {
        const output = [];
        return this.preOrder(output);
    }

    preOrder(output = []) {
        output.push(node.val);
        if (this.left) this.left.preOrder(output);
        if (this.right) this.right.preOrder(output);
    }

    inOrder(output = []) {
        if (this.left) this.left.inOrder(output);
        output.push(node.val);
        if (this.right) this.right.inOrder(output);
    }

    postOrder(output = []) {
        if (this.left) this.left.postOrder(output);
        if (this.right) this.right.postOrder(output);
        output.push(node.val);
    }

    bfs() {
        const output = [];
        const queue = new Queue();
        queue.put(this);

        while (!queue.isEmpty()) {
            const currentNode = queue.get();
            output.push(currentNode.val);

            if (currentNode.left) queue.put(currentNode.left);
            if (currentNode.right) queue.put(currentNode.right);
        }

        return output;
    }

    static fromArray(arr) {
        if (!arr.length) return null;

        let root = new BinaryTree(arr[0]);
        let queue = [root];
        let i = 1;

        while (queue.length && i < arr.length) {
            let current = queue.shift();

            // Left child
            if (i < arr.length && arr[i] !== null) {
                current.left = new BinaryTree(arr[i]);
                queue.push(current.left);
            }
            i++;

            // Right child
            if (i < arr.length && arr[i] !== null) {
                current.right = new BinaryTree(arr[i]);
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
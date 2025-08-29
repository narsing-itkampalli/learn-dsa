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
        const queue = new Queue(this);

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

        const root = new BinaryTree(arr[0]);
        const queue = new Queue(root);
        let i = 1;

        while (!queue.isEmpty() && i < arr.length) {
            const current = queue.get();

            // Left child
            if (i < arr.length && arr[i] !== null) {
                current.left = new BinaryTree(arr[i]);
                queue.put(current.left);
            }
            i++;

            // Right child
            if (i < arr.length && arr[i] !== null) {
                current.right = new BinaryTree(arr[i]);
                queue.put(current.right);
            }
            i++;
        }

        return root;
    }

    static toArray(root) {
        if (!root) return [];

        const output = [];
        const queue = new Queue(root);

        while (!queue.isEmpty()) {
            const node = queue.get();

            if (node) {
                output.push(node.val);
                queue.put(node.left);
                queue.put(node.right);
            } else {
                output.push(null);
            }
        }

        // Trim trailing nulls (not needed in array representation)
        while (output[output.length - 1] === null) {
            output.pop();
        }

        return output;
    }
}
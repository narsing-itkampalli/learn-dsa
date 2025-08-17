import Queue from "../queue.js";

export default class BinaryTree {
    constructor(val) {
        this.val = val;
        this.leftChild = null;
        this.rightChild = null;
    }

    insertLeft(val) {
        let newNode = new BinaryTree(val);
        if (!this.leftChild) {
            this.leftChild = newNode;
        } else {
            newNode.leftChild = this.leftChild;
            this.leftChild = newNode;
        }
    }

    insertRight(val) {
        let newNode = new BinaryTree(val);
        if (!this.rightChild) {
            this.rightChild = newNode;
        } else {
            newNode.rightChild = this.rightChild;
            this.rightChild = newNode;
        }
    }

    dfs() {
        const output = [];
        return this.preOrder(output);
    }

    preOrder(output = []) {
        output.push(node.val);
        if (this.leftChild) this.leftChild.preOrder(output);
        if (this.rightChild) this.rightChild.preOrder(output);
    }

    inOrder(output = []) {
        if (this.leftChild) this.leftChild.inOrder(output);
        output.push(node.val);
        if (this.rightChild) this.rightChild.inOrder(output);
    }

    postOrder(output = []) {
        if (this.leftChild) this.leftChild.postOrder(output);
        if (this.rightChild) this.rightChild.postOrder(output);
        output.push(node.val);
    }

    bfs() {
        const output = [];
        const queue = new Queue();
        queue.put(this);

        while (!queue.isEmpty()) {
            const currentNode = queue.get();
            output.push(currentNode.val);

            if (currentNode.leftChild) queue.put(currentNode.leftChild);
            if (currentNode.rightChild) queue.put(currentNode.rightChild);
        }

        return output;
    }
}
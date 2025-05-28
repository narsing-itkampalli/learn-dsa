class TreeNode {
    constructor(value, left = null, right = null, height = 1) {
        this.value = value;
        this.left = left;
        this.right = right;
        this.height = height;
    }
}

class AVLTree {
    constructor() {
        this.root = null;
    }

    getHeight(node) {
        return !node ? 0 : node.height;
    }

    getBalance(node) {
        return !node ? 0 : this.getHeight(node.left) - this.getHeight(node.right);
    }

    rotateRight(node) {
        const leftNode = node.left;
        const rightNodeOfLeftNode = leftNode.right;

        leftNode.right = node;
        node.left = rightNodeOfLeftNode;

        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
        leftNode.height = 1 + Math.max(this.getHeight(leftNode.left), this.getHeight(leftNode.right));

        return leftNode;
    }

    rotateLeft(node) {
        const rightNode = node.right;
        const leftNodeOfRightNode = rightNode.left;

        rightNode.left = node;
        node.right = leftNodeOfRightNode;

        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
        rightNode.height = 1 + Math.max(this.getHeight(rightNode.left), this.getHeight(rightNode.right));
        
        return rightNode;
    }

    insert(node, value) {
        if(!node) return new TreeNode(value);

        if(value < node.value) {
            node.left = this.insert(node.left, value);
        }else if(value > node.value) {
            node.right = this.insert(node.right, value);
        }else {
            return node;
        }

        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

        const balance = this.getBalance(node);

        // Left Left Case (LL)
        if (balance > 1 && value < node.left.value) {
            return this.rotateRight(node);
        }

        // Right Right Case (RR)
        if (balance < -1 && value > node.right.value) {
            return this.rotateLeft(node);
        }

        // Left Right Case (LR)
        if (balance > 1 && value > node.left.value) {
            node.left = this.rotateLeft(node.left);
            return this.rotateRight(node);
        }

        // Right Left Case (RL)
        if (balance < -1 && value < node.right.value) {
            node.right = this.rotateRight(node.right);
            return this.rotateLeft(node);
        }

        return node;
    }

    insertValue(value) {
        this.root = this.insert(this.root, value);
    }

    inOrderTraversal(node = this.root) {
        if (node) {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }
}

const tree = new AVLTree();

tree.insertValue(30);
tree.insertValue(20);
tree.insertValue(10); // LL case

tree.insertValue(40);
tree.insertValue(50); // RR case

tree.insertValue(25); // LR case
tree.insertValue(45); // RL case

tree.inOrderTraversal();

console.log(tree.root);
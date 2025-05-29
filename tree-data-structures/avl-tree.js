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

        
        if(balance > 1) { // Left
            if(this.getBalance(node.left) >= 0) { // Left Left
                return this.rotateRight(node);
            }else { // Left Right
                node.left = this.rotateLeft(node.left);
                return this.rotateRight(node);
            }
        }

        if(balance < -1) { // Right
            if(this.getBalance(node.right) <= 0) { // Right Right
                return this.rotateLeft(node);
            }else { // Right Left
                node.right = this.rotateRight(node.right);
                return this.rotateLeft(node);
            }
        }

        return node;
    }

    insertValue(value) {
        this.root = this.insert(this.root, value);
    }

    toSortedArray() {
        const result = [];

        const inOrderTraversal = (node) => {
            if(node == null) return;

            inOrderTraversal(node.left);
            result.push(node.value);
            inOrderTraversal(node.right);
        }

        inOrderTraversal(this.root);

        return result;
    }

    getMinValueNode(node) {
        const current = node;
        while(current.left) current = current.left;
        return current;
    }

    delete(node, value) {
        if(!node) return node;

        if(value < node.value) {
            node.left = this.delete(node.left, value);
        }else if(value > node.value) {
            node.right = this.delete(node.right, value);
        }else {
            if(!node.right) return node.left;
            if(!node.left) return node.right;

            const minValueNode = this.getMinValueNode(node.right);
            node.value = minValueNode.value;
            node.right = this.delete(node.right, minValueNode.value);
        }

        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
        const balance = this.getBalance(node);

        if(balance > 1) { // Left
            if(this.getBalance(node.left) >= 0) { // Left Left
                return this.rotateRight(node);
            }else { // Left Right
                node.left = this.rotateLeft(node.left);
                return this.rotateRight(node);
            }
        }

        if(balance < -1) { // Right
            if(this.getBalance(node.right) <= 0) { // Right Right
                return this.rotateLeft(node);
            }else { // Right Left
                node.right = this.rotateRight(node.right);
                return this.rotateLeft(node);
            }
        }

        return node;
    }

    deleteValue(value) {
        this.root = this.delete(this.root, value);
    }

    print() {
        console.log(JSON.stringify(this.root, null, 4));
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

console.log(tree.toSortedArray());
tree.print();

tree.deleteValue(20);
console.log(tree.toSortedArray());
tree.print();
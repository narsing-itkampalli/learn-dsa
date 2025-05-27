class TreeNode {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree {
    constructor(rootValue) {
        this.rootNode = new TreeNode(rootValue);
    }

    insert(value) {
        let current = this.rootNode;

        const newNode = new TreeNode(value);

        while(true) {
            if(value === current.data) break;

            if(value < current.data) {
                if(current.left === null) {
                    current.left = newNode; break;
                }
                current = current.left;
            }else if(value > current.data) {
                if(current.right === null) {
                    current.right = newNode; break;
                }
                current = current.right;
            }
        }
    }

    search(value) {
        let node = this.rootNode;

        while(node) {
            if(node.data === value) return true;
            if(value < node.data) node = node.left;
            else node = node.right;
        }

        return false;
    }

    toSortedArray() {
        const result = [];

        const inOrderTraversal = (node) => {
            if(node == null) return;

            inOrderTraversal(node.left);
            result.push(node.data);
            inOrderTraversal(node.right);
        }

        inOrderTraversal(this.rootNode);

        return result;
    }

    minValueNode(node) {
        if(node.left === null) return node;
        return this.minValueNode(node.left);
    }

    delete(value) {
        const recursiveDelete = (node, value) => {
            if(node === null) return node;

            if(value < node.data) node.left = recursiveDelete(node.left, value);
            else if(value > node.data) node.right = recursiveDelete(node.right, value);
            else {
                if(node.left === null) return node.right;
                if(node.right === null) return node.left;

                node.data = this.minValueNode(node.right).data;
                node.right = recursiveDelete(node.right, node.data);
            }

            return node;
        }

        this.rootNode = recursiveDelete(this.rootNode, value);
    }
}

const binarySearchTree = new BinarySearchTree(6);

binarySearchTree.insert(8);
binarySearchTree.insert(4);
binarySearchTree.insert(5);
binarySearchTree.insert(3);
binarySearchTree.insert(100);

console.log(binarySearchTree.rootNode);

console.log(binarySearchTree.search(5));

console.log("Before delete: " + binarySearchTree.toSortedArray());
binarySearchTree.delete(8);
binarySearchTree.delete(4);
console.log("After delete: " + binarySearchTree.toSortedArray());
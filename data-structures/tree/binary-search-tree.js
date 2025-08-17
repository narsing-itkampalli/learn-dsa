export default class BinarySearchTree {
    constructor(val) {
        this.val = val;
        this.leftChild = null;
        this.rightChild = null;
    }

    insertNode(val) {
        if (val < this.val) {
            if (this.leftChild) this.leftChild.insertNode(val);
            else this.leftChild = new BinarySearchTree(val);
        } else if (val > this.val) {
            if (this.rightChild) this.rightChild.insertNode(val);
            else this.rightChild = new BinarySearchTree(val);
        }
    }

    findNode(val) {
        if(val < this.val && this.leftChild) return this.leftChild.findNode(val);
        else if(val > this.val && this.rightChild) return this.rightChild.findNode(val);

        return val === this.val;
    }
}
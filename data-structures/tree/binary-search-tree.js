export default class BinarySearchTree {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }

    insertNode(val) {
        if (val < this.val) {
            if (this.left) this.left.insertNode(val);
            else this.left = new BinarySearchTree(val);
        } else if (val > this.val) {
            if (this.right) this.right.insertNode(val);
            else this.right = new BinarySearchTree(val);
        }
    }

    findNode(val) {
        if(val < this.val && this.left) return this.left.findNode(val);
        else if(val > this.val && this.right) return this.right.findNode(val);

        return val === this.val ? this : null;
    }

    hasNode(val) {
        return Boolean(this.findNode(val));
    }

    removeNode(val, parent) {
        if(val < this.val && this.left) return this.left.removeNode(val, this);
        if(val < this.val) return false;
        if(val > this.val && this.right) return this.right.removeNode(val, this);
        if(val > this.val) return false;
        if(this.left === null && this.right === null) {
            if(this === parent.left) parent.left = null;
            if(this === parent.right) parent.right = null;
            this.clearNode();
        }else if(this.left === null && this.right !== null) {
            this.parent = this.right;
            this.clearNode();
        }else if (this.right === null && this.left !== null) {
            this.parent = this.left;
            this.clearNode();
        }else {
            this.val = this.right.findMinimumValue();
            this.right.removeNode(this.val, this);
        }
    }

    findMinimumValue() {
        if(this.left) return this.left.findMinimum();
        return this.val;
    }

    clearNode() {
        this.val = null;
        this.left = null;
        this.right = null;
    }

    
}
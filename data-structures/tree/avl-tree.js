export default class AVLTree {

    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.height = 1;
    }

    leftHeight() {
        return this.left ? this.left.height : 0
    }

    rightHeight() {
        return this.right ? this.right.height : 0
    }

    getBalance() {
        return this.leftHeight() - this.rightHeight();
    }

    rotateRight() {
        const leftNode = this.left;
        const rightNodeOfLeftNode = leftNode.right;

        this.left = rightNodeOfLeftNode;
        leftNode.right = this;

        this.height = 1 + Math.max(this.leftHeight(), this.rightHeight());
        leftNode.height = 1 + Math.max(leftNode.leftHeight(), leftNode.rightHeight());
        
        return leftNode;
    }

    rotateLeft() {
        const rightNode = this.right;
        const leftNodeOfRightNode = rightNode.left;

        this.right = leftNodeOfRightNode;
        rightNode.left = this;

        this.height = 1 + Math.max(this.leftHeight(), this.rightHeight());
        rightNode.height = 1 + Math.max(rightNode.leftHeight(), rightNode.rightHeight());

        return rightNode;
    }

    insert(val) {
        if(val < this.val) {
            this.left = this.left ? this.left.insert(val) : new AVLTree(val);
        }else if(val > this.val) {
            this.right = this.right ? this.right.insert(val) : new AVLTree(val);
        }

        this.height = 1 + Math.max(this.leftHeight(), this.rightHeight());
        const balance = this.getBalance();

        if(balance > 1 && this.left.getBalance() >= 0) {
            return this.rotateRight();
        }

        if(balance > 1 && this.left.getBalance() < 0) {
            this.left = this.rotateLeft();
            return this.rotateRight();
        }

        if(balance < -1 && this.right.getBalance() <= 0) {
            return this.rotateLeft();
        }

        if(balance < -1 && this.right.getBalance() > 0) {
            this.right = this.right.rotateRight();
            return this.rotateLeft();
        }

        return this;
    }
}
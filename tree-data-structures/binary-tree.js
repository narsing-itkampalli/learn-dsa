class BinaryTreeNode {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

const root = new BinaryTreeNode('R');
const nodeA = new BinaryTreeNode('A');
const nodeB = new BinaryTreeNode('B');
const nodeC = new BinaryTreeNode('C');
const nodeD = new BinaryTreeNode('D');
const nodeE = new BinaryTreeNode('E');
const nodeF = new BinaryTreeNode('F');
const nodeG = new BinaryTreeNode('G');

root.left = nodeA;
root.right = nodeB;

nodeA.left = nodeC;
nodeA.right = nodeD;

nodeB.left = nodeE;
nodeB.right = nodeF;

nodeF.left = nodeG;

console.log(root.right.left.data);

function preOrderTraversal(node) {
    if(!node) return void 0;
    console.log(node.data);
    preOrderTraversal(node.left);
    preOrderTraversal(node.right);
}

function inOrderTraversal(node) {
    if(!node) return void 0;
    inOrderTraversal(node.left);
    console.log(node.data);
    inOrderTraversal(node.right);
}

function postOrderTraversal(node) {
    if(!node) return void 0;
    postOrderTraversal(node.left);
    postOrderTraversal(node.right);
    console.log(node.data);
}

postOrderTraversal(root);
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const treeMin = (root) => {
    if(!root) return Infinity;
    const left = treeMin(root.left);
    const right = treeMin(root.right);

    return Math.min(root.value, left, right);
}

const root = new Node(8);
const nodeA = new Node(6);
const nodeB = new Node(7);
const nodeC = new Node(300);
const nodeD = new Node(15);
const nodeE = new Node(28);
const nodeF = new Node(34);
const nodeG = new Node(4);

root.left = nodeA;
root.right = nodeB;

nodeA.left = nodeC;
nodeA.right = nodeD;

nodeB.left = nodeE;
nodeB.right = nodeF;

nodeF.left = nodeG;

console.log(treeMin(root));
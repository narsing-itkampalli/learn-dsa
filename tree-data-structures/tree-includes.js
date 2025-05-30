class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const treeIncludes = (root, target) => {
    if(!root) return false;
    const queue = [root];

    while(queue.length > 0) {
        const node = queue.shift();
        if(node.value === target) return true;
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
    }

    return false;
}

const root = new Node('R');
const nodeA = new Node('A');
const nodeB = new Node('B');
const nodeC = new Node('C');
const nodeD = new Node('D');
const nodeE = new Node('E');
const nodeF = new Node('F');
const nodeG = new Node('G');

root.left = nodeA;
root.right = nodeB;

nodeA.left = nodeC;
nodeA.right = nodeD;

nodeB.left = nodeE;
nodeB.right = nodeF;

nodeF.left = nodeG;

console.log(treeIncludes(root, 'Ee'));
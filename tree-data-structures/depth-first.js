class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const depthFirstValues = (root) => {
    const result = [];
    const stack = [root];

    while(stack.length > 0) {
        const node = stack.pop();
        if(!node) continue;
        result.push(node);
        stack.push(node.right, node.left);
    }

    return result;
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

console.log(depthFirstValues(root).map(node => node.value));
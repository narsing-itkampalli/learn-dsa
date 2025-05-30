class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const breadthFirstValues = (root) => {
    const result = [];
    const queue = [root];

    while(queue.length > 0) {
        const node = queue.shift();
        if(!node) continue;
        result.push(node);
        queue.push(node.left, node.right);
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

console.log(breadthFirstValues(root).map(node => node.value));
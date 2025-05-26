const binaryTreeArray = ['R', 'A', 'B', 'C', 'D', 'E', 'F', null, null, null, null, null, null, 'G'];

function leftChildIndex(parentIndex) {
    return parentIndex * 2 + 1;
}

function rightChildIndex(parentIndex) {
    return parentIndex * 2 + 2;
}

function preOrderTraversal(nodeIndex) {
    if(nodeIndex >= binaryTreeArray.length || binaryTreeArray[nodeIndex] === null) return [];
    return [binaryTreeArray[nodeIndex]].concat(...preOrderTraversal(leftChildIndex(nodeIndex)), ...preOrderTraversal(rightChildIndex(nodeIndex)));
}

function inOrderTraversal(nodeIndex) {
    if(nodeIndex >= binaryTreeArray.length || binaryTreeArray[nodeIndex] === null) return [];
    return inOrderTraversal(leftChildIndex(nodeIndex)).concat(...[binaryTreeArray[nodeIndex]], ...inOrderTraversal(rightChildIndex(nodeIndex)));
}

function postOrderTraversal(nodeIndex) {
    if(nodeIndex >= binaryTreeArray.length || binaryTreeArray[nodeIndex] === null) return [];
    return postOrderTraversal(leftChildIndex(nodeIndex)).concat(...postOrderTraversal(rightChildIndex(nodeIndex)), ...[binaryTreeArray[nodeIndex]]);
}

console.log(preOrderTraversal(0));
console.log('----------------');
console.log(inOrderTraversal(0));
console.log('----------------');
console.log(postOrderTraversal(0));
import BinarySearchTree from "../binary-search-tree.js";

const bst = new BinarySearchTree(15);

bst.insertNode(10)
bst.insertNode(8)
bst.insertNode(12)
bst.insertNode(20)
bst.insertNode(17)
bst.insertNode(25)
bst.insertNode(19)

console.log(bst);

console.log(bst.findNode(100));
console.log(bst.findNode(19));
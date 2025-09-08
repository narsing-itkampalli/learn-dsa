import BinarySearchTree from "../binary-search-tree.js";

const bst = new BinarySearchTree(15);

bst.insertNode(10)
bst.insertNode(8)
bst.insertNode(12)
bst.insertNode(20)
bst.insertNode(17)
bst.insertNode(25)
bst.insertNode(19)

bst.removeNode(10, bst);

console.log(bst.findNode(100));
console.log(bst.findNode(19));

console.log(bst);

const bstArr = BinarySearchTree.toArray(bst);

console.log(bstArr);
console.log(BinarySearchTree.fromArray(bstArr));
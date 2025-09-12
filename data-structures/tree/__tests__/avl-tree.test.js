import AVLTree from "../avl-tree.js";

let root = new AVLTree(1);

root = root.insert(8);
root = root.insert(10);

console.log(root);
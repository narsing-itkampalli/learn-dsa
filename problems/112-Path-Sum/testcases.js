import BinaryTree from "../../data-structures/tree/binary-tree.js";

export default [
    {
        root: [5,4,8,11,null,13,4,7,2,null,null,null,1],
        targetSum: 22
    },
    {
        root: [1,2,3],
        targetSum: 5
    },
    {
        root: [],
        targetSum: 0
    }
].map(({root, targetSum}) => ({root: BinaryTree.fromArray(root), targetSum}));
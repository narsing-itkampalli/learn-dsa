import BinaryTree from "../../data-structures/tree/binary-tree.js";

export default [
    {
        root: [1,null,2,3]
    },
    {
        root: [1,2,3,4,5,null,8,null,null,6,7,9]
    },
    {
        root: []
    },
    {
        root: [1]
    }
].map(({root}) => ({root: BinaryTree.fromArray(root)}));
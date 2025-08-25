import BinaryTree from "../../data-structures/tree/binary-tree.js";

export default [
    [
        [1,null,2,3]
    ],
    [
        [1,2,3,4,5,null,8,null,null,6,7,9]
    ],
    [
        []
    ],
    [
        [1]
    ]
].map(([root]) => ([BinaryTree.fromArray(root)]));
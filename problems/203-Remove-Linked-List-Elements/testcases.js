import LinkedList from "../../data-structures/linked-list.js";

export default [
    [
        [1,2,6,3,4,5,6],
        6
    ],
    [
        [],
        1
    ],
    [
        [7,7,7,7],
        7
    ]
].map(([head, val]) => ([LinkedList.fromArray(head), val]));
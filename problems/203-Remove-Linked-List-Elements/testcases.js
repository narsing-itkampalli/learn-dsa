import { arrayToLinkedList } from "../../data-structure/linked-list.js";

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
].map(([head, val]) => ([arrayToLinkedList(head), val]));
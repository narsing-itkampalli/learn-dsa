import { arrayToLinkedList } from "../../data-structures/linked-list.js";

export default [
    [
        [1,2,3,4,5],
        2
    ],
    [
        [0,1,2],
        4
    ],
    [
        [],
        0
    ],
    [
        [1,2],
        0
    ],
    [
        [1,2],
        2
    ]
].map(t => ([arrayToLinkedList(t[0]), t[1]]));
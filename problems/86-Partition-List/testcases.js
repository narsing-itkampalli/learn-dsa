import { arrayToLinkedList } from "../../data-structures/linked-list.js";

export default [
    [
        [1,4,3,2,5,2],
        3
    ],
    [
        [2,1],
        2
    ],
    [
        [1,4,3,0,2,5,2],
        3
    ],
    [
        [1,4,3,0,5,2],
        2
    ],
    [
        [1,1],
        2
    ],
    [
        [1,2,3],
        3
    ]
].map(t => ([arrayToLinkedList(t[0]), t[1]]))
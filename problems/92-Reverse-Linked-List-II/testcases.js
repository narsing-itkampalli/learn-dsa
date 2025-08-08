import { arrayToLinkedList } from "../../data-structures/linked-list.js";

export default [
    [
        [1,2,3,4,5],
        2,
        4
    ],
    [
        [1,2,3,4,5],
        1,
        5
    ],
    [
        [5],
        1,
        1
    ],
    [
        [3,5],
        1,
        2
    ]
].map(t => ([arrayToLinkedList(t[0]), t[1], t[2]]));
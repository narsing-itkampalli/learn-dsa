import { arrayToLinkedList } from "../../data-structure/linked-list.js";

export default [
    [
        [1,2,3,3,4,4,5]
    ],
    [
        [1,1,1,2,3]
    ],
    [
        [1,1]
    ]
].map(t => ([arrayToLinkedList(t[0])]));
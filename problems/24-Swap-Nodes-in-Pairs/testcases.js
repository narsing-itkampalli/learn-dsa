import { arrayToLinkedList } from "../../data-structure/linked-list.js";

export default [
    [
        [1,2,3,4]
    ],
    [
        []
    ],
    [
        [1]
    ],
    [
        [1,2,3]
    ]
].map(testcase => ([arrayToLinkedList(testcase[0])]));
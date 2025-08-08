import { arrayToLinkedList } from "../../data-structures/linked-list.js";

export default [
    [
        [1,3,4,7,1,2,6]
    ],
    [
        [1,2,3,4]
    ],
    [
        [2,1]
    ]
].map(testcase => ([arrayToLinkedList(testcase[0])]));
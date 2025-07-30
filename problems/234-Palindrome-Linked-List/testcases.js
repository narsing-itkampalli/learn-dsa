import { arrayToLinkedList } from "../../data-structure/linked-list.js";

export default [
    [
        [1,2,2,1]
    ],
    [
        [1,2]
    ],
    [
        [8, 3, 5, 3, 8]
    ],
    [
        [8, 3, 3, 8]
    ]
].map(testcase => testcase.map(t => arrayToLinkedList(t)));
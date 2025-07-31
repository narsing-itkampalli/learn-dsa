import { arrayToLinkedList } from "../../data-structure/linked-list.js";

export default [
    [
        [1,2,3,4,5]
    ],
    [
        [1,2]
    ],
    [
        []
    ]
].map(testcase => testcase.map(t => arrayToLinkedList(t)));
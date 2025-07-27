import { arrayToLinkedList } from "../../data-structure/linked-list.js";

export default [
    [
        [1,1,2]
    ],
    [
        [1,1,2,3,3]
    ],
    [
        []
    ]
].map(testcase => testcase.map(t => arrayToLinkedList(t)));
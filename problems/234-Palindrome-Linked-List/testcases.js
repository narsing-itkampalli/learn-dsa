import { arrayToLinkedList } from "../../data-structure/linked-list.js";

export default [
    [
        [1,2,2,1]
    ],
    [
        [1,2]
    ]
].map(testcase => testcase.map(t => arrayToLinkedList(t)));
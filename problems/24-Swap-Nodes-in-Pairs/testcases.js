import LinkedList from "../../data-structures/linked-list.js";

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
].map(testcase => ([LinkedList.fromArray(testcase[0])]));
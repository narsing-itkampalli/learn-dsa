import LinkedList from "../../data-structures/linked-list.js";

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
].map(testcase => ([LinkedList.fromArray(testcase[0])]));
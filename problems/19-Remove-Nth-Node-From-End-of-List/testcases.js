import LinkedList from "../../data-structures/linked-list.js";

export default [
    [
        [1,2,3,4,5],
        2
    ],
    [
        [1],
        1
    ],
    [
        [1,2],
        1
    ]
].map(testcase => ([LinkedList.fromArray(testcase[0]), testcase[1]]));
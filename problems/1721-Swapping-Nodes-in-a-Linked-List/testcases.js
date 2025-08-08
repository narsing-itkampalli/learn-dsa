import LinkedList from "../../data-structures/linked-list.js";

export default [
    [
        [1,2,3,4,5],
        2
    ],
    [
        [7,9,6,6,7,8,3,0,9,5],
        5
    ]
].map(testcase => ([LinkedList.fromArray(testcase[0]), testcase[1]]));
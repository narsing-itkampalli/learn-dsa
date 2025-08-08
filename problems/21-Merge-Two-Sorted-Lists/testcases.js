import LinkedList from "../../data-structures/linked-list.js";

export default [
    [
        [1,2,4],
        [1,3,4]
    ],
    [
        [],
        []
    ],
    [
        [],
        [0]
    ],
    [
        [5],
        [1,2,4]
    ]
].map(testcase => testcase.map(t => LinkedList.fromArray(t)));
import LinkedList from "../../data-structures/linked-list.js";

export default [
    [
        [1,2,3,4,5]
    ],
    [
        [1,2,3,4,5,6]
    ]
].map(testcase => testcase.map(t => LinkedList.fromArray(t)));
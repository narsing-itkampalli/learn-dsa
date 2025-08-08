import LinkedList from "../../data-structures/linked-list.js";

export default [
    [
        8,
        [4,1,8,4,5],
        [5,6,1,8,4,5],
        2,
        3
    ],
    [
        2,
        [1,9,1,2,4],
        [3,2,4],
        3,
        1
    ],
    [
        0,
        [2,6,4],
        [1,5],
        3,
        2
    ]
].map(([_, listA, listB, skipA, skipB]) => {
    const intersection = LinkedList.fromArray(listA.slice(skipA));

    return [
        LinkedList.fromArray(listA.slice(0, skipA), intersection),
        LinkedList.fromArray(listB.slice(0, skipB), intersection)
    ];
})
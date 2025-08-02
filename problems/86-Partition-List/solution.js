import { linkedListToArray } from "../../data-structure/linked-list.js";
import { runTest } from "../index.js";

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    if (!head || !head.next) return head;

    let insertTail = findInsertTail(head, x);
    let current = head;

    if(!insertTail) return head;
    insertTail = insertTail.tail;

    while (current) {
        const next = current.next;

        if (next && next.val < x) {
            current.next = next.next;
            const newInsertTail = insert(insertTail, head, next);
            if (!insertTail) head = newInsertTail;
            insertTail = newInsertTail;
        } else {
            current = next;
        }
    }

    return head;
};

function findInsertTail(head, x) {
    if (head.val >= x) return {tail: null};

    while (head && head.next) {
        if (head.next.val >= x) {
            return {tail: head};
        }
        head = head.next;
    }

    return null;
}

function insert(insertTail, head, node) {
    if (!insertTail) {
        node.next = head;
    } else {
        node.next = insertTail.next;
        insertTail.next = node;
    }

    return node;
}

runTest(partition, linkedListToArray);
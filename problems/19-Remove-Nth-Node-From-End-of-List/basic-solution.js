import LinkedList from "../../data-structures/linked-list.js";
import { runTest } from "../index.js";

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let reversed = reverseLinkedList(head);
    let prev = null;
    let pointer = reversed;
    let i = 1;

    while(pointer && i <= n) {
        if(i === n) {
            if(!prev) reversed = pointer.next;
            else prev.next = pointer.next;
        }
        prev = pointer;
        pointer = pointer.next;
        i++;
    }

    return reverseLinkedList(reversed);
};

function reverseLinkedList(head) {
    let prev = null;
    let curr = head;

    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;
}

runTest(removeNthFromEnd, LinkedList.toArray);
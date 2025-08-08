import { linkedListToArray } from "../../data-structures/linked-list.js";
import { runTest } from "../index.js";

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if(!head || !head.next) return head;

    let startPrev = null;
    let start = null;
    let end = null;
    let endNext = null;

    let pointer = head;
    let i = 1;

    while(pointer && (!start || !end)) {
        if(i === left) {
            start = pointer;
        }else if(i === right) {
            end = pointer;
            endNext = end.next;
        }

        if(!start) startPrev = pointer;

        pointer = pointer.next;
        i++;
    }

    if(!start || !end) return head;

    const reversed = reverse(start, end);

    if(!startPrev) head = reversed.start;
    else startPrev.next = reversed.start;

    reversed.end.next = endNext;

    return head;
};

function reverse(start, end) {
    let prev = null;
    let curr = start;
    
    while(prev !== end) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return {
        start: end,
        end: start
    };
}

runTest(reverseBetween, linkedListToArray);
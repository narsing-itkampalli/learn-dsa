import { linkedListToArray } from "../../data-structure/linked-list.js";
import { runTest } from "../index.js";

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head || !head.next) return head;
    const n = count(head);
    k %= n;

    if(k === 0) return head;

    let newTail = head;
    let i = 1;

    while(i < (n-k)) {
        newTail = newTail.next;
        i++;
    }

    const newHead = newTail.next;
    newTail.next = null;
    
    getTail(newHead).next = head;

    return newHead;
};

function getTail(head) {
    let tail = head;

    while(tail) {
        if(tail.next) tail = tail.next;
        else break;
    }

    return tail;
}

function count(head) {
    let i = 0;

    while(head) {
        head = head.next;
        i++;
    }

    return i;
}

runTest(rotateRight, linkedListToArray);
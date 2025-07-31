import { linkedListToArray } from "../../data-structure/linked-list.js";
import { runTest } from "../index.js";

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    if(!head) return head;
    let prev = null;
    let slow = head;
    let fast = head;

    while(fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    if(prev) prev.next = slow.next;
    else head = head.next;

    return head;
};

runTest(deleteMiddle, linkedListToArray);
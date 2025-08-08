import { linkedListToArray } from "../../data-structures/linked-list.js";
import { runTest } from "../index.js";

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let fast = head;

    for(let i = 1; i < n; i++) {
        fast = fast.next;
    }

    let prev = null;
    let curr = head;

    while(fast) {
        if(!fast.next) {
            if(!prev) head = curr.next;
            else prev.next = curr.next;
            break;
        }
        fast = fast.next;
        prev = curr;
        curr = curr.next;
    }
    
    return head;
};

runTest(removeNthFromEnd, linkedListToArray);
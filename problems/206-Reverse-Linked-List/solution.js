import { linkedListToArray } from "../../data-structure/linked-list.js";
import { runTest } from "../index.js";

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null;
    let curr = head;

    while(curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;
};

runTest(reverseList, linkedListToArray);
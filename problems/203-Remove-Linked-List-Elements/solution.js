import { runTest } from "../index.js";

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let previous = null;
    let current = head;

    while(current) {
        const next = current.next;
        if(current.val === val) {
            if(previous) previous.next = next;
            else head = next;
            current = next;
        }else {
            previous = current;
            current = next;
        }
    }

    return head;
};

runTest(removeElements);
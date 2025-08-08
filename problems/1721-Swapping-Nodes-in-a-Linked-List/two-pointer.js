import { linkedListToArray } from "../../data-structures/linked-list.js";
import { runTest } from "../index.js";

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    let firstPointer = head;

    for(let i = 1; i < k; i++) {
        firstPointer = firstPointer.next;
    }

    let lastPointer = head, fast = firstPointer;
    while(fast && fast.next) {
        lastPointer = lastPointer.next;
        fast = fast.next;
    }

    const firstPointerVal = firstPointer.val;
    firstPointer.val = lastPointer.val;
    lastPointer.val = firstPointerVal;

    return head;
};


runTest(swapNodes, linkedListToArray);
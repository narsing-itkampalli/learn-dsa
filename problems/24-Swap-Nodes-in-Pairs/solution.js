import { linkedListToArray } from "../../data-structures/linked-list.js";
import { runTest } from "../index.js";

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(!head) return head;
    const newHead = head.next || head;
    let tailConnector = null;
    let prev = head;
    let curr = head.next;
    let i = 2;

    while(curr) {
        if(i%2 === 0) {
            const next = curr.next;
            prev.next = next;
            curr.next = prev;
            if(!tailConnector) {
                tailConnector = prev;
            }else {
                tailConnector.next = curr;
                tailConnector = prev;
            }

            curr = next;
        }else {
            prev = curr;
            curr = curr.next;
        }

        i++;
    }
    
    return newHead;
};

runTest(swapPairs, linkedListToArray);
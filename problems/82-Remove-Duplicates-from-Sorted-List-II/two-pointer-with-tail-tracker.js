import { linkedListToArray } from "../../data-structures/linked-list.js";
import { runTest } from "../index.js";

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(!head || !head.next) return head;

    let tail = null;
    let prev = head;
    let curr = head.next;

    while(curr) {
        if(curr.val === prev.val) {
            const nextDistinctValNode = getNextDistinctValNode(curr);
            if(!tail) {
                head = nextDistinctValNode;
            }else {
                tail.next = nextDistinctValNode;
            }
            prev = nextDistinctValNode;
            curr = nextDistinctValNode?.next;
        }else {
            tail = prev;
            prev = curr;
            curr = curr.next;
        }
    }

    return head;
};

function getNextDistinctValNode(head) {
    const val = head.val;

    while(head) {
        if(head.val === val) head = head.next;
        else return head;
    }

    return null;
}

runTest(deleteDuplicates, linkedListToArray);
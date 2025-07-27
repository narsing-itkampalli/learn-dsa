import { runTest } from "../index.js";

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(!head) return head;
    let node = head;

    while(node && node.next) {
        if(node.val === node.next.val) node.next = node.next.next;
        else node = node.next;
    }

    return head;
};

runTest(deleteDuplicates);
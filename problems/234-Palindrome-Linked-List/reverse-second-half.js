import { runTest } from "../index.js";

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(!head || !head.next) return true;

    let slow = head, fast = head;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let prev = null, curr = slow;
    while(curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    let first = head, second = prev;
    while(second) {
        if(first.val !== second.val) return false;
        first = first.next;
        second = second.next;
    }

    return true;
}

runTest(isPalindrome);
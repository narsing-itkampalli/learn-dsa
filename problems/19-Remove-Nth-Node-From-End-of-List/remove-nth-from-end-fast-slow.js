import LinkedList from "../../data-structures/linked-list.js";
import { runTest } from "../index.js";

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let slow = head, fast = head;
    let prev = null;
    let i = 1;
    let isEven = false;

    // Step 1: Use fast and slow pointers to find mid and infer total length
    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
        i++;
        if (!fast) isEven = true; // If fast becomes null, list is even-length
    }

    // Step 2: Calculate total nodes in the list
    let total = ((i - 1) * 2) + (isEven ? 0 : 1);

    // Step 3: Convert "Nth from end" to "Nth from start"
    n = (total - n) + 1;

    // Step 4: Decide whether to start from head or mid
    let pointer = slow;
    if (i > n) {
        i = 1;
        pointer = head;
        prev = null;
    }

    // Step 5: Traverse to the target node and remove it
    while (pointer && i <= n) {
        if (i === n) {
            if (!prev) head = pointer.next;
            else prev.next = pointer.next;
        }
        prev = pointer;
        pointer = pointer.next;
        i++;
    }

    return head;
};


runTest(removeNthFromEnd, LinkedList.toArray);
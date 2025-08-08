import { linkedListToArray } from "../../data-structures/linked-list.js";
import { runTest } from "../index.js";

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if(!list1 || !list2) return list1 || list2;
    let current = list1.val <= list2.val ? list1 : list2;
    let root = current;
    let rest = current === list1 ? list2 : list1;

    while(rest && current) {
        if(current.val <= rest.val && (!current.next || current.next.val >= rest.val)) {
            const next = current.next;
            current.next = rest;
            current = rest;
            rest = next;
        }else {
            if(!current.next) {
                current.next = rest;
                break;
            }
            current = current.next;
        }
    }

    return root;
};

runTest(mergeTwoLists, linkedListToArray);
import { runTest } from "../index.js";

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    const arr = [];
    
    while(head) {
        arr.push(head.val);
        head = head.next;
    }

    const n = arr.length;

    if(n <= 1) return true;

    for(let i = 0; i < Math.floor(n / 2); i++) {
        if(arr[i] !== arr[n - i - 1]) return false;
    }

    return true;
};

runTest(isPalindrome);
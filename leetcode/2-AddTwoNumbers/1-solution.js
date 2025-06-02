function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var addTwoNumbers = function (l1, l2) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry > 0) {
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;

        const sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);
        const digit = sum % 10;

        current.next = new ListNode(digit);
        current = current.next;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return dummyHead.next;
};

const l1 = createLinkedList([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
const l2 = createLinkedList([5, 6, 4]);

function createLinkedList(arr) {
    const res = new ListNode();
    let last = res;

    for (let item of arr) {
        last.next = new ListNode(item);
        last = last.next;
    }

    return res.next;
}

console.log(addTwoNumbers(l1, l2));
var getDecimalValue = function(head) {
    let value = "";

    while(head) {
        value += head.val || 0;
        head = head.next;
    }

    return parseInt(value, 2);
};

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

console.log(getDecimalValue(new ListNode(1, new ListNode(0, new ListNode(1)))));
console.log(getDecimalValue(new ListNode(0)));
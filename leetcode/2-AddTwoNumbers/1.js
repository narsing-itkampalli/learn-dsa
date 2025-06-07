function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var addTwoNumbers = function(l1, l2) {
    let l1Number = '';
    let l2Number = '';

    let l1Node = l1;
    let l2Node = l2;

    while(l1Node) {
        l1Number = l1Node.val + l1Number;
        l1Node = l1Node.next;
    }

    while(l2Node) {
        l2Number = l2Node.val + l2Number;
        l2Node = l2Node.next;
    }

    let finalNumber = parseInt(l1Number) + parseInt(l2Number);

    // console.log(finalNumber % 1000)

    const resultNode = new ListNode();
    let lastNode = resultNode;

    for(let i = 1; i <= finalNumber.length; i++) {
        lastNode.next = new ListNode(finalNumber.at(-i));
        lastNode = lastNode.next;
    }

    return resultNode;
};

const l1 = createLinkedList([1,0,0,1]);
const l2 = createLinkedList([5,6,4]);

function createLinkedList(arr) {
    const res = new ListNode();
    let last = res;

    for(let item of arr) {
        last.next = new ListNode(item);
        last = last.next;
    }

    return res.next;
}

console.log(addTwoNumbers(l1, l2));
export function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

export function arrayToLinkedList(arr, tail = null) {
    if(arr.length === 0) return null;
    const root = new ListNode(arr[0], null);
    let current = root;

    for(let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i], null);
        current = current.next;
    }

    current.next = tail;

    return root;
}

export function linkedListToArray(head) {
    if(!head) return [];
    const res = [];

    while(head) {
        res.push(head.val);
        head = head.next;
    }

    return res;
}
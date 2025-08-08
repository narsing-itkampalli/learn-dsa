class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

export default class LinkedList {
    static createNode(val, next) {
        return new ListNode(val, next);
    }

    static fromArray(arr, tail = null) {
        if (arr.length === 0) return null;
        const root = LinkedList.createNode(arr[0], null);
        let current = root;

        for (let i = 1; i < arr.length; i++) {
            current.next = LinkedList.createNode(arr[i], null);
            current = current.next;
        }

        current.next = tail;

        return root;
    }

    static toArray(head) {
        if (!head) return [];
        const res = [];

        while (head) {
            res.push(head.val);
            head = head.next;
        }

        return res;
    }
}
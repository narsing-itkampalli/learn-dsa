import LinkedList from "./linked-list.js";

export default class Queue {
    constructor(...values) {
        this.store = null;
        this.tail = null;

        values.forEach(value => this.put(value));
    }

    put(val) {
        let newNode = LinkedList.createNode(val);

        if (!this.store) {
            this.store = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    get() {
        if (!this.store) return null;
        const val = this.store.val;
        this.store = this.store.next;
        return val;
    }

    isEmpty() {
        return this.store === null;
    }
}
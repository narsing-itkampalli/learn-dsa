import LinkedList from "../linked-list/linked-list.js";

export default class Stack {
    stack = new LinkedList();

    constructor(...elements) {
        elements.forEach((element) => {
            this.stack.push(element);
        });
    }

    push(element) {
        this.stack.insertNode(element, 0);
    }

    pop() {
        return this.stack.deleteNode((node) => node === this.stack.head);
    }

    peek() {
        return this.stack.head.data;
    }

    isEmpty() {
        return this.stack.count() === 0;
    }

    size() {
        return this.stack.count();
    }
}
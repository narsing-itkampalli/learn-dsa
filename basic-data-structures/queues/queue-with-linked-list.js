import LinkedList from "../linked-list/linked-list.js";

export default class Queue {
    queue = new LinkedList(); // Using Array

    constructor(...elements) {
        elements.forEach(element => this.enqueue(element));
    }


    enqueue(element) {
        this.queue.insertNode(element);
    }

    dequeue() {
        return this.queue.deleteNode((node) => node === this.queue.head);
    }

    peek() {
        return this.queue.head.data;
    }

    isEmpty() {
        return this.queue.count() === 0;
    }

    size() {
        return this.queue.count();
    }

}
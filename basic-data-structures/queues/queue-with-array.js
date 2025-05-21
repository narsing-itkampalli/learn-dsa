export default class Queue {
    queue = []; // Using Array

    constructor(...elements) {
        elements.forEach(element => this.enqueue(element));
    }


    enqueue(element) {
        this.queue.push(element);
    }

    dequeue() {
        if(this.isEmpty()) return null;
        return this.queue.splice(0, 1)[0];
    }

    peek() {
        return this.queue[0];
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    size() {
        return this.queue.length;
    }

}
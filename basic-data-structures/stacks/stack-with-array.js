export default class Stack {
    stack = [];

    constructor(...elements) {
        elements.forEach((element) => {
            this.stack.push(element);
        });
    }

    push(element) {
        this.stack.push(element);
    }

    pop() {
        return this.stack.pop();
    }

    peek() {
        return this.stack.at(-1);
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    size() {
        return this.stack.length;
    }
}
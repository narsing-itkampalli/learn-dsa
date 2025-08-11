import { runTest } from "../index.js";

/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.size = k;
    this.queue = new Array(k);
    this.head = 0;
    this.count = 0;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if(this.isFull()) return false;
    this.queue[(this.head + this.count) % this.size] = value;
    this.count++;
    return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if(this.isEmpty()) return false;
    this.head = (this.head + 1) % this.size;
    this.count--;
    return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if(this.isEmpty()) return -1;
    return this.queue[this.head];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if(this.isEmpty()) return -1;
    return this.queue[(this.head + (this.count - 1)) % this.size];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.count === 0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.count === this.size;
};

runTest((operations, values) => {
    operations.shift();
    const [k] = values.shift();
    const obj = new MyCircularQueue(k);
    return [null, ...operations.map((operation, i) => obj[operation](...values[i]))];
});
import { runTest } from "../index.js";

/**
 * @param {number} k
 */
var MyCircularDeque = function(k) {
    this.size = k;
    this.queue = new Array(k);
    this.head = 0;
    this.count = 0;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
    if(this.isFull()) return false;
    const head = (this.head - 1 + this.size) % this.size;
    this.queue[head] = value;
    this.head = head;
    this.count++;
    return true;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
    if(this.isFull()) return false;
    const tail = (this.head + this.count) % this.size;
    this.queue[tail] = value;
    if(this.count === 0) this.head = tail;
    this.count++;
    return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
    if(this.isEmpty()) return false;
    this.head = (this.head + 1) % this.size;
    this.count--;
    return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
    if(this.isEmpty()) return false;
    this.count--;
    return true;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
    if(this.isEmpty()) return -1;
    return this.queue[this.head];
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
    if(this.isEmpty()) return -1;
    return this.queue[(this.head + this.count - 1) % this.size];
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
    return this.count === 0;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
    return this.count === this.size;
};

runTest((operations, values) => {
    operations.shift();
    const [k] = values.shift();
    const obj = new MyCircularDeque(k);
    const output = [null, ...operations.map((operation, i) => obj[operation](...values[i]))];

    console.log(obj.queue);
    return output;
});
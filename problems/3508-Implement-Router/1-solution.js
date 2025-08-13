import { runTest } from "../index.js";

/**
 * @param {number} memoryLimit
 */
var Router = function(memoryLimit) {
    this.memoryLimit = memoryLimit;
    this.packets = [];
    this.packetCount = 0;
};

/** 
 * @param {number} source 
 * @param {number} destination 
 * @param {number} timestamp
 * @return {boolean}
 */
Router.prototype.addPacket = function(source, destination, timestamp) {
    for(let i = this.packetCount - 1; i >= 0; i--) {
        const packet = this.packets[i];
        if(packet[2] < timestamp) break;
        if(packet[0] === source && packet[1] === destination && packet[2] === timestamp) return false;
    }
    if (this.packetCount >= this.memoryLimit) this.forwardPacket();
    this.packets.push([ source, destination, timestamp ]);
    this.packetCount++;
    return true;
};

/**
 * @return {number[]}
 */
Router.prototype.forwardPacket = function() {
    if(this.packetCount > 0) this.packetCount--;
    return this.packets.shift() || [];
};

/** 
 * @param {number} destination 
 * @param {number} startTime 
 * @param {number} endTime
 * @return {number}
 */
Router.prototype.getCount = function(destination, startTime, endTime) {
    let count = 0;

    for(let i = this.packetCount - 1; i >= 0; i--) {
        const packet = this.packets[i];
        if(packet[2] < startTime) break;
        if(packet[2] > endTime) continue;
        if(packet[1] === destination) count++;
    }

    return count;
};

runTest((operations, values) => {
    operations.shift();
    const [k] = values.shift();
    const obj = new Router(k);
    const output = [null, ...operations.map((operation, i) => obj[operation](...values[i]))];
    return output;
});
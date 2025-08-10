import { runTest } from "../index.js";

var RecentCounter = function() {
    this.requests = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.requests.push(t);
    
    while(this.requests[0] < t-3000) {
        this.requests.shift();
    }

    return this.requests.length;
};

function testHelper(_, b) {
    var obj = new RecentCounter();
    const output = [null];

    b = b.slice(1);

    for(let [t] of b) output.push(obj.ping(t));

    return output;
}

runTest(testHelper);

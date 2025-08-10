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
    let count = 0;
    const n = this.requests.length;

    for(let i = n - 1; i >= 0; i--) {
        if(this.requests[i] >= t - 3000 && this.requests[i] <= t) count++;
        else break;
    }

    return count;
};

function testHelper(_, b) {
    var obj = new RecentCounter();
    const output = [null];

    b = b.slice(1);

    for(let [t] of b) output.push(obj.ping(t));

    return output;
}

runTest(testHelper);

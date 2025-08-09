import { runTest } from "../index.js";

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    return n > 0 && !(n & n-1);
};

runTest(isPowerOfTwo);
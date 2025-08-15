import { runTest } from "../index.js";

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    while(n > 0 && (n === 1 || n % 4 === 0)) {
        if(n === 1) return true;
        n /= 4;
    }

    return false;
};

runTest(isPowerOfFour);
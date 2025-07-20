import { runTest } from "../index.js";

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let pending = 1;
    const n = digits.length;

    for(let i = n-1; i < n; i++) {
        const num = digits[i] + pending;
        if(num < 10) {
            digits[i] = num;
            pending = 0;
            break;
        }else {
            digits[i] = 0;
        }
    }

    if(pending) digits.unshift(pending);

    return digits;
};

runTest(plusOne);
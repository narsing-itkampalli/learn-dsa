import { runTest } from "../index.js";

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let i = digits.length-1;
    
    while(true) {
        if(i >= 0) {
            let current = digits[i] + 1;
            if(current < 10) {
                digits[i] = current;
                break;
            }else digits[i] = 0;
        }else {
            digits.unshift(1);
            break;
        }

        i--;
    }

    return digits;
};

runTest(plusOne);
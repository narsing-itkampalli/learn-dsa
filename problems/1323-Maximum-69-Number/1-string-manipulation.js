import { runTest } from "../index.js";

/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    num = num.toString();

    let index = num.indexOf('6');

    if(index >= 0) return Number(num.slice(0, index) + '9' + num.slice(index + 1));
    return Number(num);
};

runTest(maximum69Number);
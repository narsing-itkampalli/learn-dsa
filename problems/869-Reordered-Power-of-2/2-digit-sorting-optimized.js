import { runTest } from "../index.js";

/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function(n) {
    const sortDigits = (num) => num.toString().split('').sort().join('');
    const target = sortDigits(n);
    
    for (let i = 0; i < 30; i++) {
        let power = sortDigits(2**i);
        if(power === target) return true;
        if(power.length > target.length) break;
    }

    return false;
};

runTest(reorderedPowerOf2);
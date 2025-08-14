import { runTest } from "../index.js";

/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    const found = [];
    let count = 1;
    let prev = null;

    for(let n of num) {
        if(n === prev) count++;
        else count = 1;

        if(count === 3) found.push(Number(n));

        prev = n;
    }

    return found.length > 0 ? Math.max(...found).toString().repeat(3) : "";
};

runTest(largestGoodInteger);
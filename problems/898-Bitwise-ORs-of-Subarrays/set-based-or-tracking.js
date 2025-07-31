import { runTest } from "../index.js";

/**
 * @param {number[]} arr
 * @return {number}
 */
var subarrayBitwiseORs = function(arr) {
    const res = new Set();
    let prev = new Set();

    for (let num of arr) {
        const cur = new Set();
        cur.add(num);

        for (let val of prev) {
            cur.add(val | num);
        }

        for (let val of cur) {
            res.add(val);
        }

        prev = cur;
    }

    return res.size;
};

runTest(subarrayBitwiseORs);
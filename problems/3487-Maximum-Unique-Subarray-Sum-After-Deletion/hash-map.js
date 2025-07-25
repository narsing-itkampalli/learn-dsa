import { runTest } from "../index.js";

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function(nums) {
    let map = new Map();
    const n = nums.length;
    let sum = 0;
    let max = -Infinity;

    for(let i = 0; i < n; i++) {
        const num = nums[i];
        if(num > 0 && !map.has(num)) {
            sum+=num;
            map.set(num, true);
        }else max = Math.max(max, num);
    }

    return sum || max;
};

runTest(maxSum);
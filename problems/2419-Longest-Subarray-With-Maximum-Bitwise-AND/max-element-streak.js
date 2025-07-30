import { runTest } from "../index.js";

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    const max = Math.max(...nums);
    let maxLen = 0;
    let currentLen = 0;

    for(let num of nums) {
        if(num === max) {
            currentLen++;
            maxLen = Math.max(maxLen, currentLen);
        } else currentLen = 0
    }

    return maxLen;
};

runTest(longestSubarray);
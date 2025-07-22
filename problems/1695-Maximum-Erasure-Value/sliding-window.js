import { runTest } from "../index.js";

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function(nums) {
    let left = 0;
    let right = 0;
    const n = nums.length;
    const valMap = new Map();

    let maxSum = -Infinity;
    let winSum = 0;

    while (right < n) {
        if (valMap.has(nums[right])) {
            valMap.delete(nums[left]);
            winSum -= nums[left];
            left++;
        } else {
            winSum += nums[right];
            valMap.set(nums[right], true);
            right++;
            maxSum = Math.max(maxSum, winSum);
        }
    }

    return maxSum;
}


runTest(maximumUniqueSubarray);
import { runTest } from "../index.js";

// Time complexity: O(n)
// Space complexity: O(1)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const n = nums.length;

    for(let i = 0; i < n; i++) {
        if(target <= nums[i]) return i;
    }

    return n;
};

runTest(searchInsert);
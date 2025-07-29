import { runTest } from "../index.js";

/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function(nums) {
    let maxOr = 0;
    let count = 0;

    const backtrack = (index, currentOr) => {
        if (index === nums.length) {
            if (currentOr === maxOr) count++;
            return;
        }

        // Include current number
        backtrack(index + 1, currentOr | nums[index]);

        // Exclude current number
        backtrack(index + 1, currentOr);
    };

    for (let num of nums) maxOr |= num;

    backtrack(0, 0);

    return count;
};

runTest(countMaxOrSubsets);
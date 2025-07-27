import { runTest } from "../index.js";

var countHillValley = function(nums) {
    const cleaned = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            cleaned.push(nums[i]);
        }
    }

    let count = 0;
    for (let i = 1; i < cleaned.length - 1; i++) {
        if (
            (cleaned[i] > cleaned[i - 1] && cleaned[i] > cleaned[i + 1]) ||
            (cleaned[i] < cleaned[i - 1] && cleaned[i] < cleaned[i + 1])
        ) {
            count++;
        }
    }

    return count;
};

runTest(countHillValley);
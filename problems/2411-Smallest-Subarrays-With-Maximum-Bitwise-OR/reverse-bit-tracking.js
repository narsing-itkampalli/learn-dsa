import { runTest } from "../index.js";

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallestSubarrays = function(nums) {
    const n = nums.length;
    const answer = new Array(n).fill(0);
    const lastSeen = new Array(32).fill(-1);

    for (let i = n - 1; i >= 0; i--) {
        for (let bit = 0; bit < 32; bit++) {
            if ((nums[i] & (1 << bit)) !== 0) {
                lastSeen[bit] = i;
            }
        }

        let maxReach = i;
        for (let bit = 0; bit < 32; bit++) {
            if (lastSeen[bit] !== -1) {
                maxReach = Math.max(maxReach, lastSeen[bit]);
            }
        }

        answer[i] = maxReach - i + 1;
    }

    return answer;
};

runTest(smallestSubarrays);

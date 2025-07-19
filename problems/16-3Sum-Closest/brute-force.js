import { runTest } from '../index.js';

// Time: O(n^3), Space: O(1)
var threeSumClosest = function(nums, target) {
    const n = nums.length;
    let result = Infinity;

    for(let i = 0; i < n-2; i++) {
        for(let j = i+1; j < n-1; j++) {
            for(let k = j+1; k < n; k++) {
                let current = nums[i]+nums[j]+nums[k];
                if(Math.abs(target - current) < Math.abs(target - result)) {
                    result = current;
                }
            }
        }
    }

    return result;
};

runTest(threeSumClosest);
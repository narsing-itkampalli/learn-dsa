// Time Complexity - O(n^2)
// Space Complexity - O(1)

var twoSum = function(nums, target) {
    const n = nums.length;

    for(let i = 0; i < n; i++) {
        for(let j = i + 1; j < n; j++) {
            if(target - nums[i] === nums[j]) return [i, j];
        }
    }
}

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
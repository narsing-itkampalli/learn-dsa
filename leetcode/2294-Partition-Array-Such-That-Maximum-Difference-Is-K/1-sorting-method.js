var partitionArray = function(nums, k) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    let min = 0;
    let result = 1;

    for(let i = 1; i < n; i++) {
        if(nums[i] - nums[min] <= k) continue;
        min = i;
        result++;
    }

    return result;
};

console.log(partitionArray([3,6,1,2,5], 2));
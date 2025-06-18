var divideArray = function(nums, k) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    const result = [];

    for(let i = 2; i < n; i+=3) {
        if(nums[i] - nums[i - 2] > k) return [];
        result.push(nums.slice(i - 2, i + 1));
    }

    return result;
};

console.log(divideArray([1,3,4,8,7,9,3,5,1]))
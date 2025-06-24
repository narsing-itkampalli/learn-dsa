var findKDistantIndices = function(nums, key, k) {
    const resultSet = new Set();

    for (let j = 0; j < nums.length; j++) {
        if (nums[j] === key) {
            const start = Math.max(0, j - k);
            const end = Math.min(nums.length - 1, j + k);
            for (let i = start; i <= end; i++) {
                resultSet.add(i);
            }
        }
    }
    
    return Array.from(resultSet).sort((a, b) => a - b);
};

console.log(findKDistantIndices([3,4,9,1,3,9,5], 9, 1));
console.log(findKDistantIndices([2,2,2,2,2], 2, 2));
var maxAdjacentDistance = function(nums) {
    const n = nums.length;
    let maxDiff = 0;

    for(let i = 0; i < n; i++) {
        const nextIndex = (i + 1) % n;
        const diff = Math.abs(nums[i] - nums[nextIndex]);
        maxDiff = Math.max(maxDiff, diff);
    }

    return maxDiff;
};

console.log(maxAdjacentDistance([1,2,4]));
console.log(maxAdjacentDistance([-5,-10,-5]))
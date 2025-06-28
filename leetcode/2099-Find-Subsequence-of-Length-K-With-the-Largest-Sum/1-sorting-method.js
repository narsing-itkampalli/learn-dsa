var maxSubsequence = function(nums, k) {
    const indexed = nums.map((num, idx) => [num, idx]);
    const topK = indexed.sort((a, b) => b[0] - a[0]).slice(0, k);

    topK.sort((a, b) => a[1] - b[1]);

    return topK.map(pair => pair[0]);
};

console.log(maxSubsequence([2,1,3,3], 2))
console.log(maxSubsequence([-1,-2,3,4], 3))
console.log(maxSubsequence([3,4,3,3], 2))
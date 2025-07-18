/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumLength = (nums, k) => {
    const length = Array.from({ length: k }, () => Array(k).fill(0));
    let maxLen = 0;

    for (let i = 0; i < nums.length; i++) {
        const curr = nums[i] % k;
        for (let prev = 0; prev < k; prev++) {
            length[curr][prev] = length[prev][curr] + 1;
            maxLen = Math.max(maxLen, length[curr][prev]);
        }
    }

    return maxLen;
}

console.log(maximumLength([1, 2, 3, 4, 5], 2));
console.log(maximumLength([1, 4, 2, 3, 1, 4], 3));
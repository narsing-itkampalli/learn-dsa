// Time Complexity: O(n log n) - due to sorting
// Space Complexity: O(n) - for powerOfTwo array

var numSubseq = function(nums, target) {
    const MOD = 1e9 + 7;
    const n = nums.length;
    const powerOfTwo = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        powerOfTwo[i] = (powerOfTwo[i - 1] * 2) % MOD;
    }

    nums.sort((a, b) => a - b);

    let subsequences = 0;
    let left = 0, right = n - 1;

    while (left <= right) {
        if (nums[left] + nums[right] > target) {
            right--;
        } else {
            subsequences = (subsequences + powerOfTwo[right - left]) % MOD;
            left++;
        }
    }

    return subsequences;
}

console.log(numSubseq([3,5,6,7], 9));
console.log(numSubseq([3,3,6,8], 10));
console.log(numSubseq([2,3,3,4,6,7], 12));
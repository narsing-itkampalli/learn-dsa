/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumLength = function(nums) {
    const n = nums.length;
    let oddCount = nums[0] % 2 === 1 ? 1 : 0;
    let evenCount = nums[0] % 2 === 0 ? 1 : 0;
    let alternateCount = 1;

    let expectingEven = nums[0] % 2 === 1;

    for (let i = 1; i < n; i++) {
        if ((expectingEven && nums[i] % 2 === 0) || (!expectingEven && nums[i] % 2 === 1)) {
            alternateCount += 1;
            expectingEven = !expectingEven;
        }

        if (nums[i] % 2 === 1) {
            oddCount += 1;
        } else {
            evenCount += 1;
        }
    }

    return Math.max(evenCount, oddCount, alternateCount);
};

console.log(maximumLength([1,2,3,4]));
console.log(maximumLength([1,2,1,1,2,1,2]));
console.log(maximumLength([1,3]));
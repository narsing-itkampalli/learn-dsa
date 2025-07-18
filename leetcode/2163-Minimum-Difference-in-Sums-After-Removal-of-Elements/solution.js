import testcases from './testcases.js';

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDifference = function(nums) {
    const n = nums.length;
    const rightMaxSum = new Array(n).fill(0);
    const minArr = [];
    let rightSum = 0;

    for (let i = n - 1; i >= Math.floor(n / 3); --i) {
        binaryInsert(minArr, nums[i]);
        rightSum += nums[i];

        if (minArr.length > Math.floor(n / 3)) {
            rightSum -= minArr[0];
            minArr.shift();
        }

        if (minArr.length === Math.floor(n / 3)) {
            rightMaxSum[i] = rightSum;
        }
    }

    const maxArr = [];
    let leftSum = 0;
    let minDiff = Infinity;

    for (let i = 0; i < Math.floor((2 * n) / 3); ++i) {
        binaryInsert(maxArr, nums[i]);
        leftSum += nums[i];

        if (maxArr.length > Math.floor(n / 3)) {
            leftSum -= maxArr[maxArr.length - 1];
            maxArr.pop();
        }

        if (maxArr.length === Math.floor(n / 3)) {
            minDiff = Math.min(minDiff, leftSum - rightMaxSum[i + 1]);
        }
    }

    return minDiff;
};

function binaryInsert(arr, val) {
    let left = 0, right = arr.length;
    while (left < right) {
        const mid = (left + right) >> 1;
        if (arr[mid] < val) left = mid + 1;
        else right = mid;
    }
    arr.splice(left, 0, val);
}

let time = new Date().getTime();
testcases.forEach(testcase => {
    console.log(minimumDifference(testcase));
});

console.log({time: `${new Date().getTime() - time}ms`});
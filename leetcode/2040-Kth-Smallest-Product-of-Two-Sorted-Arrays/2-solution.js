import testcases from './testcases.js'

// Tried effient that brute-force but code get complicated.

var kthSmallestProduct = function(nums1, nums2, k) {
    const merged = [];

    const n = nums1.length;
    const m = nums2.length;

    const nums1FirstNonNegativeIndex = firstNonNegativeIndex(nums1);
    const nums2FirstNonNegativeIndex = firstNonNegativeIndex(nums2);

    const nums1PositiveCount = nums1FirstNonNegativeIndex >=0 ? n - nums1FirstNonNegativeIndex : 0;
    const nums2PositiveCount = nums2FirstNonNegativeIndex >=0 ? m - nums2FirstNonNegativeIndex : 0;
    
    const nums1NegativeCount = n - nums1PositiveCount;
    const nums2NegativeCount = m - nums2PositiveCount;

    const smallestCount = (nums1NegativeCount * nums2PositiveCount) + (nums2NegativeCount * nums2PositiveCount);

    console.log({
        nums1NegativeCount,
        nums1PositiveCount,
        nums2NegativeCount,
        nums2PositiveCount,
        smallestCount
    });

    for(let num1 of nums1) {
        for(let num2 of nums2) {
            merged.push(num1 * num2);
        }
    }

    return merged.sort((a, b) => a - b)[k - 1];
};

function firstNonNegativeIndex(arr) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] >= 0) {
            result = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return result;
}

let time = new Date().getTime();
testcases.forEach(testcase => {
    console.log(kthSmallestProduct(...testcase));
});

console.log({time: `${new Date().getTime() - time}ms`});
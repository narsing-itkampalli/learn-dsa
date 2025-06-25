import testcases from './testcases.js'

var kthSmallestProduct = function(nums1, nums2, k) {
    const merged = [];

    for(let num1 of nums1) {
        for(let num2 of nums2) {
            merged.push(num1 * num2);
        }
    }

    return merged.sort((a, b) => a - b)[k - 1];
};

let time = new Date().getTime();
testcases.forEach(testcase => {
    console.log(kthSmallestProduct(...testcase));
});

console.log({time: `${new Date().getTime() - time}ms`})
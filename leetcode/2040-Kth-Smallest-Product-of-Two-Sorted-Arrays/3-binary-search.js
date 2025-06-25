import testcases from './testcases.js'

var kthSmallestProduct = function(nums1, nums2, k) {
    function countPairs(mid) {
        let count = 0;
        for (let a of nums1) {
            if (a === 0) {
                if (mid >= 0) count += nums2.length;
            } else if (a > 0) {
                let left = 0, right = nums2.length;
                while (left < right) {
                    let m = Math.floor((left + right) / 2);
                    if (a * nums2[m] <= mid) left = m + 1;
                    else right = m;
                }
                count += left;
            } else {
                let left = 0, right = nums2.length;
                while (left < right) {
                    let m = Math.floor((left + right) / 2);
                    if (a * nums2[m] <= mid) right = m;
                    else left = m + 1;
                }
                count += nums2.length - left;
            }
        }
        return count;
    }

    let low = -1e10, high = 1e10;
    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (countPairs(mid) < k) low = mid + 1;
        else high = mid;
    }

    return low;
}

let time = new Date().getTime();
testcases.forEach(testcase => {
    console.log(kthSmallestProduct(...testcase));
});

console.log({time: `${new Date().getTime() - time}ms`})
import testcases from "./testcases.js";

var kthSmallestProduct = function(nums1, nums2, k) {
    const countPairs = (mid) => {
        let count = 0;

        for(let num1 of nums1) {
            
            if(num1 === 0) {
                if(mid >= 0) count += nums2.length;
            }
            else if(num1 > 0) {
                let left = 0, right = nums2.length;

                while(left < right) {
                    const m = Math.floor((left + right) / 2);
                    if(nums2[m] * num1 <= mid) left = m + 1;
                    else right = m;
                }

                count += left;
            }else if(num1 < 0) {
                let left = 0, right = nums2.length;

                while(left < right) {
                    const m = Math.floor((left + right) / 2);
                    if(nums2[m] * num1 <= mid) right = m;
                    else left = m + 1;
                }

                count += nums2.length - left;
            }
        }

        return count;
    }

    let low = -(10**10), high = (10**10);

    while(low < high) {
        const mid = Math.floor((low + high) / 2);
        if(countPairs(mid) < k) low = mid + 1;
        else high = mid;
    }

    return low;
}

let time = new Date().getTime();
testcases.forEach(testcase => {
    console.log(kthSmallestProduct(...testcase));
});

console.log({time: `${new Date().getTime() - time}ms`})
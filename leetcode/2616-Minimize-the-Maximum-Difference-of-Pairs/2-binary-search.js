var minimizeMax = function(nums, p) {
    if(p === 0) return 0;
    nums = nums.sort((a, b) => a - b);
    const n = nums.length;
    let [left, right] = [0, 10**9];
    let res = 10**9;

    while(left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (isValid(mid)) {
            res = mid;
            right = mid - 1;
        }else {
            left = mid + 1;
        }
    }

    return res;

    function isValid(threshold) {
        let [i, count] = [0, 0];

        while(i < n - 1) {
            if(Math.abs(nums[i] - nums[i + 1]) <= threshold) {
                count++;
                i +=2;
            }else {
                i += 1;
            }

            if(count === p) {
                return true;
            }
        }

        return false;
    }
};

console.log(minimizeMax([10,1,2,7,1,3], 2))
console.log(minimizeMax([4,2,1,2], 1))
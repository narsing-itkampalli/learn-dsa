var findLHS = function(nums) {
    const map = new Map();

    // Step 1: Count frequencies
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    let maxLen = 0;

    // Step 2: Check for num + 1
    for (let [key, value] of map.entries()) {
        if (map.has(key + 1)) {
            maxLen = Math.max(maxLen, value + map.get(key + 1));
        }
    }

    return maxLen;
};

console.log(findLHS([1,3,2,2,5,2,3,7], 5));
console.log(findLHS([1,2,3,4], 2));
console.log(findLHS([1,1,1,1], 0));
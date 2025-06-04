var lengthOfLongestSubstring = function(s) {
    let result = 0;
    const n = s.length;

    for(let i = 0; i < n; i++) {
        const substr = new Set();
        for(let j = i; j < n; j++) {
            if(substr.has(s[j])) {
                result = Math.max(result, substr.size);
                break;
            }else {
                substr.add(s[j]);
            }
        }
    }

    return result;
};
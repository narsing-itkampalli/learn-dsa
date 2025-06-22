// Time complexity - O(n/k)
// Space complexity - O(n)
var divideString = function(s, k, fill) {
    const n = s.length;
    const result = [];
    
    for(let i = 0; i < n; i+=k) result.push(s.slice(i, i+k));

    const last = result[result.length - 1].length;
    if(last < k) result[result.length - 1] += fill.repeat(k-last);

    return result;
};

console.log(divideString("abcdefghi", 3, "x"));
console.log(divideString("abcdefghij", 3, "x"));
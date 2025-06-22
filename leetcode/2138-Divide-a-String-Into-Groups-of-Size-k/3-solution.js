// Time complexity - O(n/k)
// Space complexity - O(n)
var divideString = function(s, k, fill) {
    const n = s.length;
    const result = [];
    
    for(let i = 0; i < n; i+=k) {
        let item = s.slice(i, i+k);
        if(item.length < k) item += fill.repeat(k-item.length);
        result.push(item);
    }

    return result;
};

console.log(divideString("abcdefghi", 3, "x"));
console.log(divideString("abcdefghij", 3, "x"));
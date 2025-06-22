var divideString = function(s, k, fill) {
    const n = s.length;
    const result = [];
    
    for(let i = 0; i < n; i+=k) {
        let item = "";
        for(let j = 0; j < k; j++) item += s[i+j]||fill
        result.push(item);
    }

    return result;
};

console.log(divideString("abcdefghi", 3, "x"));
console.log(divideString("abcdefghij", 3, "x"));
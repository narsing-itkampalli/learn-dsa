import testcases from "./testcases.js";

var longestSubsequence = function(s, k) {
    s = s.split('');
    const n = s.length;

    for(let i = 0; i < n; i++) {
        if(s[i] == '1') {
            s[i] = '';
        }
        let str = s.join('');
        if(parseInt(str, 2) <= k) return str.length;
    }
};


let time = new Date().getTime();
testcases.forEach(testcase => {
    console.log(longestSubsequence(...testcase));
});

console.log({time: `${new Date().getTime() - time}ms`})
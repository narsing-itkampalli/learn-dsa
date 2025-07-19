import testcases from "./testcases.js";

var longestSubsequence = function(s, k) {
    let result = 0;
    let num = 0;
    let len = s.length;

    for (let i = len - 1; i >= 0; i--) {
        if (s[i] === '1' && (num + Math.pow(2, len - 1 - i)) <= k) {
            num += Math.pow(2, len - 1 - i);
            result++;
        } else if (s[i] === '0') {
            result++;
        }
    }

    return result;
};


let time = new Date().getTime();
testcases.forEach(testcase => {
    console.log(longestSubsequence(...testcase));
});

console.log({time: `${new Date().getTime() - time}ms`})
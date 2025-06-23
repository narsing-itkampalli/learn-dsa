import testcases from "./testcases.js";

var kMirror = function(k, n) {
    let count = 0;
    let sum = 0;
    let num = 1;

    while(count < n) {
        if(isPalindrome(num.toString(10)) && isPalindrome(num.toString(k))) {
            sum += num;
            count++;
        }
        num++;
    }

    return sum;
};

function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

// { time: '728ms' }
// { time: '70276ms' } if n = 5, k = 20
let time = new Date().getTime();
testcases.forEach(testcase => {
    console.log(kMirror(...testcase));
});

console.log({time: `${new Date().getTime() - time}ms`})
import testcases from "./testcases.js";

var kMirror = function(k, n) {
    let sum = 0;
    let length = 1;

    while (n > 0) {
        const halfLength = Math.floor((length + 1) / 2);
        const minNum = Math.pow(10, halfLength - 1);
        const maxNum = Math.pow(10, halfLength) - 1;

        for (let num = minNum; num <= maxNum; num++) {
            const firstHalf = num.toString();
            const reversed = [...firstHalf].reverse().join('');

            let fullPalindrome = '';
            if (length % 2 === 0) {
                fullPalindrome = firstHalf + reversed;
            } else {
                fullPalindrome = firstHalf + reversed.slice(1);
            }

            const palNum = BigInt(fullPalindrome);
            const baseK = convertToBaseK(Number(palNum), k);

            if (isPalindrome(baseK)) {
                sum += Number(palNum);
                n--;
                if (n === 0) {
                    return sum;
                }
            }
        }
        length++;
    }

    return sum;
}

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

function convertToBaseK(num, k) {
    if (num === 0) return '0';

    let res = '';
    while (num > 0) {
        res += (num % k);
        num = Math.floor(num / k);
    }
    return res;
}

let time = new Date().getTime();
testcases.forEach(testcase => {
    console.log(kMirror(...testcase));
});

console.log({time: `${new Date().getTime() - time}ms`})
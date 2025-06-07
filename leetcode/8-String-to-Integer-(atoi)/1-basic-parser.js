// Time: O(n), Space: O(1)
// n = length of the input string

const INT_MIN = -2147483648;
const INT_MAX = 2147483647;

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let ignoreWhitespace = true;
    let foundMinus = false;
    let foundPlus = false;
    let result = 0;
    const n = s.length;

    for(let i = 0; i < n; i++) {
        if([' ', '-', '+'].includes(s[i])) {
            if(!ignoreWhitespace || foundMinus || foundPlus) break;
            if(s[i] === '-') foundMinus = true;
            if(s[i] === '+') foundPlus = true;
            continue;
        }
        ignoreWhitespace = false;
        const number = s[i].charCodeAt(0) - 48;
        if(number > 9 || number < 0) break;
        result = (result * 10) + number;
    }

    const num = foundMinus ? -result : result;

    if (num < INT_MIN) return INT_MIN;
    else if (num > INT_MAX) return INT_MAX;
    return num;
};
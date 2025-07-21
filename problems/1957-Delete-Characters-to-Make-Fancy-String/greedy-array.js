import { runTest } from "../index.js";

/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    s = s.split('');
    const n = s.length;
    let last = 1;

    for(let i = 2; i < n; i++) {
        if(s[i] !== s[last] || s[last] !== s[last-1]) last = i;
        else s[i] = '';
    }

    return s.join('');
};

runTest(makeFancyString);
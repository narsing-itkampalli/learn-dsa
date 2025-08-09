import { runTest } from "../index.js";

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const hashMap = new Map();
    const n = s.length;

    for(let i = 0; i < n; i++) {
        hashMap.set(s[i], (hashMap.get(s[i]) || 0) + 1);
    }

    for(let [letter, count] of hashMap) {
        if(count === 1) return s.indexOf(letter);
    }

    return -1;
};

runTest(firstUniqChar);
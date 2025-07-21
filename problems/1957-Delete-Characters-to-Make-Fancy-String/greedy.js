import { runTest } from "../index.js";

/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    const n = s.length;
    let res = s.slice(0, 2);

    for(let i = 2; i < n; i++) {
        const len = res.length;
        if(s[i] !== res[len-1] || res[len-1] !== res[len-2]) res+=s[i];
    }

    return res;
};

runTest(makeFancyString);
import { runTest } from "../index.js";

const parentheses = {
    "{": "}",
    "[": "]",
    "(": ")"
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const openBrackets = Object.keys(parentheses);
    const closeBrackets = Object.values(parentheses);

    const store = [];

    for(let char of s) {
        if(openBrackets.includes(char)) {
            store.push(parentheses[char]);
        }else if(closeBrackets.includes(char) && store.pop() !== char) {
            return false;
        }
    }

    return store.length === 0;
};

runTest(isValid);
const numsMap = {
    1: "",
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz"
};

var letterCombinations = function(digits) {
    const n = digits.length;
    const result = [];

    function backtrack(index, current) {
        if(index === n) {
            if(current) result.push(current);
            return;
        }

        const digitLetters = numsMap[digits[index]];

        if(!digitLetters.length) {
            backtrack(index + 1, current);
        }else {
            for(let char of digitLetters) {
                backtrack(index + 1, current + char);
            }
        }
    }

    backtrack(0, '');

    return result;
};

console.log(letterCombinations("23"));
console.log(letterCombinations(""));
console.log(letterCombinations("2"));
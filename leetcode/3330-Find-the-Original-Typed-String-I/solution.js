var possibleStringCount = function (word) {
    let total = 1;
    let i = 0;

    while (i < word.length) {
        let j = i;
        while (j < word.length && word[j] === word[i]) {
            j++;
        }
        const groupLen = j - i;
        if (groupLen > 1) {
            total += groupLen - 1;
        }
        i = j;
    }

    return total;
};

console.log(possibleStringCount("abbcccc"));
console.log(possibleStringCount("abcd"));
console.log(possibleStringCount("aaaa"));
console.log(possibleStringCount("a"));
console.log(possibleStringCount("aabbcc"));
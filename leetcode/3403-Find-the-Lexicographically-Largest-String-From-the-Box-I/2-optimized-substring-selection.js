/*
    Optimized version of the substring comparison algorithm.

    Instead of checking all possible substrings of length (word.length - numFriends + 1),
    this version narrows down the candidates by only considering substrings that start 
    at positions where the maximum character in the word appears.

    This reduces the number of unnecessary comparisons and improves efficiency in most cases,
    especially when the word contains diverse characters.
*/

var answerString = function(word, numFriends) {
    if(numFriends === 1) return word;
    let result = "";
    
    const n = word.length;
    const longestPossible = n - (numFriends - 1);

    let maxChar = word[0];
    const maxCharIndexes = [0];

    for(let i = 1; i < n; i++) {
        if(word[i] > maxChar) {
            maxChar = word[i];
            maxCharIndexes.splice(0, maxCharIndexes.length, i);
        }
        else if(word[i] == maxChar) {
            maxCharIndexes.push(i);
        }
    }

    maxCharIndexes.forEach((startIndex) => {
        const substr = word.substr(startIndex, longestPossible);
        if(substr > result) {
            result = substr;
        }
    });

    return result;
};

console.log(answerString("dbca", 2));
console.log(answerString("ccdn", 4));
console.log(answerString("dcdh", 3));
console.log(answerString("shjtcocathk", 10));
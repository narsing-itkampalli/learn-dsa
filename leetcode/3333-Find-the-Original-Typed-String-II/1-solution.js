// Time complexity - O(n × k × maxFreq)
// Space complexity - O(n × k)

const MOD = 1e9 + 7;
let memo = [];

var possibleStringCount = function(word, k) {
    if (k > word.length) return 0;

    // Step 1: Count frequency of consecutive same characters
    const frequencyList = [];
    let count = 1;
    for (let i = 1; i < word.length; i++) {
        if (word[i] === word[i - 1]) {
            count++;
        } else {
            frequencyList.push(count);
            count = 1;
        }
    }
    frequencyList.push(count);

    // Step 2: Calculate total number of possible strings
    let totalPossible = 1;
    for (const frequency of frequencyList) {
        totalPossible = (totalPossible * frequency) % MOD;
    }

    if (frequencyList.length >= k) {
        return totalPossible;
    }

    // Step 3: Initialize memoization table and calculate invalid count
    const n = frequencyList.length;
    memo = Array.from({ length: n + 1 }, () => Array(k + 1).fill(-1));
    const invalidCount = countInvalidStrings(0, 0, frequencyList, k);

    // Step 4: Subtract invalid count from total to get valid count
    return (totalPossible - invalidCount + MOD) % MOD;
};

function countInvalidStrings(index, currentCount, frequencyList, k) {
    if (index >= frequencyList.length) {
        return currentCount < k ? 1 : 0;
    }

    if (memo[index][currentCount] !== -1) {
        return memo[index][currentCount];
    }

    let total = 0;

    for (let take = 1; take <= frequencyList[index]; take++) {
        if (currentCount + take < k) {
            total = (total + countInvalidStrings(index + 1, currentCount + take, frequencyList, k)) % MOD;
        } else {
            break;
        }
    }

    return (memo[index][currentCount] = total);
}

console.log(possibleStringCount("aabbccdd", 7));
console.log(possibleStringCount("aabbccdd", 8));
console.log(possibleStringCount("aaabbb", 3));
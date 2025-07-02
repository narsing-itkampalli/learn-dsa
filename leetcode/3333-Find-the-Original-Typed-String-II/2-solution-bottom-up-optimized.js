// (Bottom Up) - Optimized
// Time complexity - O(n*k)
// Space complexity - O(n*k)

var possibleStringCount = function (word, k) {
    const MOD = 1e9 + 7;

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

    // Step 2: Calculate total possible strings (product of all frequencies)
    let totalPossible = 1;
    for (const freq of frequencyList) {
        totalPossible = (totalPossible * freq) % MOD;
    }

    if (frequencyList.length >= k) {
        return totalPossible;
    }

    // Step 3: Bottom-up DP to calculate invalid string count
    const n = frequencyList.length;
    const dp = Array.from({ length: n + 1 }, () => Array(k + 1).fill(0));

    for (let c = k - 1; c >= 0; c--) {
        dp[n][c] = 1;
    }

    for (let i = n - 1; i >= 0; i--) {
        const prefixSum = Array(k + 2).fill(0);
        for (let h = 1; h <= k; h++) {
            prefixSum[h] = (prefixSum[h - 1] + dp[i + 1][h - 1]) % MOD;
        }

        for (let c = k - 1; c >= 0; c--) {
            let left = c + 1;
            let right = c + frequencyList[i];
            if (right + 1 > k) {
                right = k - 1;
            }

            if (left <= right) {
                dp[i][c] = (prefixSum[right + 1] - prefixSum[left] + MOD) % MOD;
            }
        }
    }

    const invalidCount = dp[0][0];
    return (totalPossible - invalidCount + MOD) % MOD;
}

console.log(possibleStringCount("aabbccdd", 7));
console.log(possibleStringCount("aabbccdd", 8));
console.log(possibleStringCount("aaabbb", 3));
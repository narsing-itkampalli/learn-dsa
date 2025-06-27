// Time Complexity: O(c^L * n)
// Space Complexity: O(n + c^L)

var longestSubsequenceRepeatedK = function(s, k) {
    let result = "";

    function isKSubsequence(s, sub, k) {
        let i = 0, j = 0, n = s.length, m = sub.length;

        while (i < n && j < k * m) {
            if (s[i] === sub[j % m]) {
                j++;
            }
            i++;
        }

        return j === k * m;
    }

    function backtrack(curr, canUse, freqAvailable, k, maxLen) {
        if (curr.length === maxLen) {
            if (isKSubsequence(s, curr, k)) {
                result = curr;
                return true;
            }
            return false;
        }

        for (let i = 25; i >= 0; i--) {
            if (!canUse[i] || freqAvailable[i] === 0) continue;

            const ch = String.fromCharCode(97 + i); // 'a' + i
            curr += ch;
            freqAvailable[i]--;

            if (backtrack(curr, canUse, freqAvailable, k, maxLen)) return true;

            curr = curr.slice(0, -1); // backtrack
            freqAvailable[i]++;
        }

        return false;
    }

    // Step 1: Count character frequency
    const freq = new Array(26).fill(0);
    for (const ch of s) {
        freq[ch.charCodeAt(0) - 97]++;
    }

    const canUse = new Array(26).fill(false);
    const maxAvailable = new Array(26).fill(0);

    for (let i = 0; i < 26; i++) {
        if (freq[i] >= k) {
            canUse[i] = true;
            maxAvailable[i] = Math.floor(freq[i] / k);
        }
    }

    const maxLen = Math.floor(s.length / k);

    // Try decreasing lengths
    for (let len = maxLen; len >= 1; len--) {
        const tempFreq = [...maxAvailable];
        if (backtrack("", canUse, tempFreq, k, len)) break;
    }

    return result;
}

console.log(longestSubsequenceRepeatedK("letsleetcode", 2))
console.log(longestSubsequenceRepeatedK("bb", 2))
console.log(longestSubsequenceRepeatedK("ab", 2))
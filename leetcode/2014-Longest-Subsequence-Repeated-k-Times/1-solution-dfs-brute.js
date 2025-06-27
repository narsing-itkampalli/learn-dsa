// Time Complexity: O(c^L * n)
// Space Complexity: O(n + c^L)
var longestSubsequenceRepeatedK = function(s, k) {
    const freq = new Map();
    for (const ch of s) {
        freq.set(ch, (freq.get(ch) || 0) + 1);
    }

    const chars = Array.from(freq.entries())
        .filter(([_, count]) => count >= k)
        .map(([ch, _]) => ch)
        .sort()
        .reverse();

    const maxLen = Math.floor(s.length / k);
    let result = "";

    function isKSubsequence(subseq, s, k) {
        let i = 0;
        for (const ch of s) {
            if (subseq[i] === ch) {
                i++;
                if (i === subseq.length) {
                    k--;
                    if (k === 0) return true;
                    i = 0;
                }
            }
        }
        return false;
    }

    function dfs(path) {
        if (path.length > maxLen) return;

        if (
            path.length > result.length ||
            (path.length === result.length && path > result)
        ) {
            if (isKSubsequence(path, s, k)) {
                result = path;
            }
        }

        for (const ch of chars) {
            dfs(path + ch);
        }
    }

    dfs("");
    return result;
}

console.log(longestSubsequenceRepeatedK("letsleetcode", 2))
console.log(longestSubsequenceRepeatedK("bb", 2))
console.log(longestSubsequenceRepeatedK("ab", 2))
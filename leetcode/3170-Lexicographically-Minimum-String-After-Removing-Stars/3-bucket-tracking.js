// Optimized O(n) solution using 26 buckets for each character
// Replaces sorted array with constant-time character tracking
// Time: O(n), Space: O(n)
var clearStars = function(s) {
    s = s.split('');
    let buckets = Array.from({ length: 26 }, () => []);

    for (let i = 0; i < s.length; ++i) {
        if (s[i] === '*') {
            s[i] = '';
            for (let j = 0; j < 26; ++j) {
                if (buckets[j].length > 0) {
                    let idx = buckets[j].pop();
                    s[idx] = '';
                    break;
                }
            }
        } else {
            buckets[s[i].charCodeAt(0) - 97].push(i);
        }
    }

    return s.join('');
}
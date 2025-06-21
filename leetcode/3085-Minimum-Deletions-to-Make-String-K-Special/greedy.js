var minimumDeletions = function(word, k) {
    const freq = new Array(26).fill(0);

    for (const ch of word) {
        freq[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    let result = word.length;

    for (let i = 0; i < 26; i++) {
        let del = 0;

        for (let j = 0; j < 26; j++) {
            if (i === j) continue;

            if (freq[j] < freq[i]) {
                del += freq[j];
            } else if (Math.abs(freq[j] - freq[i]) > k) {
                del += Math.abs(freq[j] - freq[i] - k);
            }
        }

        result = Math.min(result, del);
    }

    return result;
};

console.log(minimumDeletions("aabcaba", 0));
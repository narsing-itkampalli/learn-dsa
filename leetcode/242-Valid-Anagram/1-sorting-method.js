/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(n !== t.length) return false;
    s = s.split('').sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
    t = t.split('').sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
    const n = s.length;

    for(let i = 0; i < n; i++) {
        if(s[i] !== t[i]) return false;
    }

    return true;
};

console.log(isAnagram("anagram", "nagaram"));
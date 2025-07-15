// T.C : O(n)
// S.C : O(1)

const vowels = ['a', 'e', 'i', 'o', 'u'];
const lowercaseRange = ['a'.charCodeAt(0), 'z'.charCodeAt(0)];
const uppercaseRange = ['A'.charCodeAt(0), 'Z'.charCodeAt(0)];

/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function(word) {
    const n = word.length;
    let hasVowel = false;
    let hasConsonant = false;
    if(n < 3) return false;

    for(let i = 0; i < n; i++) {
        if(!isNaN(word[i])) continue;
        const charCode = word.charCodeAt(i);
        if(charCode >= lowercaseRange[0] && charCode <= lowercaseRange[1]) {
            if(vowels.includes(word[i])) hasVowel = true;
            else hasConsonant = true;
            continue;
        }
        if(charCode >= uppercaseRange[0] && charCode <= uppercaseRange[1]) {
            if(vowels.includes(word[i].toLowerCase())) hasVowel = true;
            else hasConsonant = true;
            continue;
        }

        return false;
    }

    return hasVowel && hasConsonant;
};

console.log(isValid("234Adas"));
console.log(isValid("b3"));
console.log(isValid("a3$e"));
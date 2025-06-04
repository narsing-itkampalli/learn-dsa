
/*
    Time and Space Complexity

    Time Complexity: O(n * k)

    Where:
    🔸 n = word.length
    🔸 k = longestPossible = n - (numFriends - 1)

    In the worst case, k ≈ n, so:
    🔸 Each iteration takes O(k) for .substr(i, k)
    🔸 There are n such substrings.

    So worst-case: O(n^2)

    Space Complexity: O(k) = O(n - numFriends + 1)
    🔸 Only stores a few substrings of length up to k during comparison.
 */
var answerString = function(word, numFriends) {
    if(numFriends === 1) return word;
    let result = "";
    
    const n = word.length;
    const longestPossible = n - (numFriends - 1);

    for(let i = 0; i < n; i++) {
        const substr = word.substr(i, longestPossible);
        if(substr > result) result = substr;
    }

    return result;
};
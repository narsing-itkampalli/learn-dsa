// T.C : O(k)
// S.C : O(k*2)

var kthCharacter = function(k) {
    let word = "a";

    while(word.length < k) {
        word += word.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');
    }

    return word[k - 1];
};


let time = new Date().getTime();
console.log(kthCharacter(5));
console.log(kthCharacter(10));

console.log({time: `${new Date().getTime() - time}ms`})
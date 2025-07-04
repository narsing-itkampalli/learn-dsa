// T.C : O(log k)
// S.C : O(1)


var kthCharacter = function(k, operations) {
    let count_ops = 0;
    let val = k;

    while(val > 1) {
        const jumps = Math.ceil(Math.log2(val));
        val -= Math.pow(2, jumps-1);
        count_ops += operations[jumps-1];
    }

    return String.fromCharCode('a'.charCodeAt(0)+(count_ops%26));
};

console.log(kthCharacter(5, [0,0,0]));
console.log(kthCharacter(10, [0,1,0,1]));
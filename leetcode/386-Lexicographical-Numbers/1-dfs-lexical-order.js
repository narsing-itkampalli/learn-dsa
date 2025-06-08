// Time: O(n), Space: O(n)

var lexicalOrder = function(n) {
    const result = [];

    for(let i = 1; i <= 9; i++) {
        if(i > n) break;
        solve(i, n, result);
    }

    return result;
};

function solve(current, n, result) {
    result.push(current);
    
    for(let i = 0; i <= 9; i++) {
        const newNum = (current*10) + i;
        if(newNum > n) break;
        solve(newNum, n, result);
    }
}

console.log(lexicalOrder(15));
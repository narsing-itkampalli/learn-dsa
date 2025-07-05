// T.C : O(n)
// S.C : O(n)

var findLucky = function(arr) {
    const map = {};

    for(let num of arr) {
        map[num] = (map[num] || 0) + 1;
    }

    let res = -1;

    Object.keys(map).forEach((num) => {
        num = Number(num);
        if(num == map[num]) res = Math.max(res, num);
    });

    return res;
};

console.log(findLucky([2,2,3,4]));
console.log(findLucky([1,2,2,3,3,3]));
console.log(findLucky([2,2,2,3,3]));